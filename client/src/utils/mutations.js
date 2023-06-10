import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        token
        user {
            _id
            username
            email
            bookCount
            savedBooks
        }        
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        token
        user {
            _id
            username
            email
            bookCount
            savedBooks
        } 
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($authors: String!, $description: String!, $title: String!, $bookId: String!, $image: String!, $link: String!) {
        _id
        username
        email
        bookCount
        savedBooks
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        _id
        username
        email
        bookCount
        savedBooks
    }
`;
