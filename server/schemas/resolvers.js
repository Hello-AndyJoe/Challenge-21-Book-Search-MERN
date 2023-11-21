// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({_id:context.user._id}).select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('User must be logged in')
        },
    },

    Mutation: {
        createUser: async (parent, args) => {
            const newUser = await User.create(args);
            const token = signToken(newUser);

            return { token, newUser };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
        
            if (!user) {
                throw new AuthenticationError('Cannot find this user');
            }
        
            const userPassword = await user.isCorrectPassword(password);
        
            if (!userPassword) {
                throw new AuthenticationError('Wrong password!');
            }
        
            const token = signToken(profile);
            return { token, profile };
        },
        saveBook: async (parent, {bookData},context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    {_id:context.user._id},
                    {$push:{savedBooks:bookData}},
                    {new: true}
                )
                return updatedUser
            }
        },
        deleteBook: async (parent, {bookId},context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id:context.user._id},
                    {$pull:{savedBooks:{bookId}}},
                    {new: true}
                )
                return updatedUser
            } 
        },
    },
};

module.exports = resolvers;