const gql = require('graphql-tag');

module.exports.resolvers = {
    Query: {
        me: async (root, args, context, info) => {
            const user = context.user;
            const foundUser = await User.findOne({
                $or: [{ _id: user._id }],
              });
          
            return foundUser;
        }
    }
}