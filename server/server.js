const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { authMiddleware } = require('./utils/auth');
const cors = require('cors');
const { json } = require('body-parser');
const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const { typeDefs, resolvers } = require('./Schemas');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// you must call 'start()' on the 'ApolloServer'
// instance before passing the instance to 'expressMiddleware'
server.start()
  .then( () => {
    // the path where you mount the server
    app.use('/graphql', cors(), json(), expressMiddleware(server, {
      context: authMiddleware,
    }));
    
    // if we're in production, serve client/build as static assets
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/build')));
    }

    app.use(routes);

    db.once('open', () => {
      app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
    });
  });
