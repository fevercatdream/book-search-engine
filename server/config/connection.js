const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');
mongoose.connect(`mongodb+srv://fevercatdream:simple@leafdream.0l1xgsy.mongodb.net/?retryWrites=true&w=majority`)
module.exports = mongoose.connection;
