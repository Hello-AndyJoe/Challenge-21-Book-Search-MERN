// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        getSingleUser: 
    },

    Mutation: {
        createUser: 
        login:
        saveBook:
        deleteBook:
    },
};

module.exports = resolvers;