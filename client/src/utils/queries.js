export const getMe = (token) => {
    fetch( '/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            query: `
                query {
                    me
                }
            `
        })
    })
}