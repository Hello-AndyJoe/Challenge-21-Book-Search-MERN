// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        getSingleUser: async (parent, {userid}) => {
            return User.findOne({_id:userid});
        },
    },

    Mutation: {
        createUser: async (parent, {username, email, password}) => {
            const newUser = await User.create({username, email, password});
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
        saveBook: async (parent, {}) => {
            return User.create({});
        },
        deleteBook: async (parent, {}) => {
            return User.create({});
        },
    },
};

module.exports = resolvers;