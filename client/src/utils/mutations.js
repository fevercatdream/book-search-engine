import { gql } from '@apollo/client';

export const loginUser = (userData) => {
    fetch( '/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                mutation {
                    login(email: "${userData.email}", password: "${userData.password}"){
                       token
                       user {
                        _id
                        username
                        email
                        bookCount
                        savedBooks
                       }
                    }
                } 
            `
        })
    })
}

export const createUser = (userData) => {
    fetch( '/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                mutation {
                    addUser(username: "${userData.username}", email: "${userData.email}", password: "${userData.password}"){
                        token
                        user {
                            _id
                            username
                            email
                            bookCount
                            savedBooks
                        }
                    }
                }
            `
        })
    })
}

export const saveBook = (bookData, token) => {
    fetch( '/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            query: `
                mutation {
                    saveBook(authors: "${bookData.authors}", description: "${bookData.description}", title: "${bookData.title}", bookId: "${bookData.bookId}", image: "${bookData.image}", link: "${bookData.link}"){
                        _id
                        username
                        email
                        bookCount
                        savedBooks
                    }
                }
            `
        })
    })
}

export const deleteBook = (bookId, token) => {
    fetch( '/graphql', {
        method: 'POST',
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            query: `
                mutation {
                    removeBook(bookId: "${bookId}"){
                        _id
                        username
                        email
                        bookCount
                        savedBooks
                    }
                }
            `
        })
    })
}