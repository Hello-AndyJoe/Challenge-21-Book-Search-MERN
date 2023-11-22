import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
                password
                username
            }
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
        token
            user {
                email
                password
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation SaveBook($bookData: userBooks!) {
        saveBook(bookData: $bookData) {
            username
            savedBooks {
              title
              link
              image
              description
              bookId
              authors
            }
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation DeleteBook($bookId: ID!) {
        deleteBook(bookId: $bookId) {
            username
            savedBooks {
                title
                link
                description
                image
                bookId
                authors
            }
        }
    }
`;