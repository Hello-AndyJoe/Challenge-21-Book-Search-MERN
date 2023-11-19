// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        getSingleUser: async (parent, {userId}) => {
            return User.findOne({_id:userId});
        },
    },

    Mutation: {
        createUser: async (parent, {}) => {
            return User.create({});
        },
        login: async (parent, {}) => {
            return User.create({});
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