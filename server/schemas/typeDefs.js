const typeDefs =`
    type User {
        username: String
        email: String
        password: String
        savedBooks: Books
    }

    type Books {
        authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Query {

    }

    type Mutation {

    }
    
`;