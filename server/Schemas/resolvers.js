const gql = require('graphql-tag');
const { signToken } = require('../utils/auth');
const { User } = require('../models');

module.exports.resolvers = {
    Query: {
        me: async (root, args, context, info) => {
            if (context.user) {
                const user = context.user;
                const foundUser = await User.findOne({
                    _id: user._id
                });
            
                return foundUser;
            }
            throw new Error('You need to be logged in!');
        }
    },
    Mutation: {
        login: async (root, args, context, info) => {
            const email = args.email;
            const password = args.password;
            const foundUser = await User.findOne({
                email: email
            });
            const correctPw = await foundUser.isCorrectPassword(password);
            if (foundUser === null || !correctPw)
                return null;
            const token = signToken(foundUser);
            return {token, user: foundUser};
        },
        addUser: async (root, args, context, info) => {
            const username = args.username;
            const email = args.email;
            const password = args.password;
            const user = await User.create({
                username: username,
                email: email,
                password: password
            });
            if (!user) {
                return null;
            }
            const token = signToken(user);
            return {token, user};

        },
        saveBook: async (root, args, context, info) => {
            if (context.user) {
                const authors = args.authors;
                const description = args.description;
                const title = args.title;
                const bookId = args.bookId;
                const image = args.image;
                const link = args.link;
                const user = context.user;
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedBooks: { authors, description, title, bookId, image, link } } },
                    { new: true, runValidators: true }
                );       
                return updatedUser;  
            }
            throw new Error('You need to be logged in!');   
        },
        removeBook: async (root, args, context, info) => {
            if(context.user) {
                const bookId = args.bookId;
                const user = context.user;
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $pull: { savedBooks: { bookId } } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new Error('You need to be logged in!');
        },
    }
}
