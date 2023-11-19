const typeDefs =`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Books]
    }

    type Book {
        bookId:
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        me:
    }

    type Mutation {
        login:
        addUser:
        saveBook:
        removeBook:
    }

`;

module.exports = typeDefs;