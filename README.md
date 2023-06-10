# Book Search Engine

## Description

Take a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack (M - MongoDB, E - ExpressJS, R - ReactJS, N - NodeJS), with a React front end, MongoDB database, and Node.js/Express.js server and API.


### User Story

```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

### Acceptance Criteria

```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button 
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

A step-by-step description of how to get the development environment running.

Use the following command to install the necessary packages

```
npm install (package_name@version)

npm run build
```

This application uses the following:

[@apollo/server](https://www.npmjs.com/package/@apollo/server) Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client

[graphql](https://www.npmjs.com/package/graphql) GraphQL.js is a general-purpose library and can be used both in a Node server and in the browser

[@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) custom jest matchers to test the state of the DOM

[@testing-library/react](https://www.npmjs.com/package/@testing-library/react) a simple and complete React DOM testing utilities that encourage good testing practices

[@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event) user-event tries to simulate the real events that would happen in the browser as the user interacts with it

[bootstrap](https://www.npmjs.com/package/bootstrap) the most popular front-end framework for developing responsive, mobile first projects on the web

[concurrently](https://www.npmjs.com/package/concurrently) run multiple commands concurrently

[react](https://www.npmjs.com/package/react) React is a JavaScript library for building user interfaces

[react-dom](https://www.npmjs.com/package/react-dom) React package for working with the DOM

[react-router-dom](https://www.npmjs.com/package/react-router-dom) declarative routing for React web applications

[react-scripts](https://www.npmjs.com/package/react-scripts) configuration and scripts for Create React App

[web-vitals](https://www.npmjs.com/package/web-vitals) easily measure performance metrics in JavaScript


## Usage

Search for books to read and keep a list of books to purchase.


### Deployed Site
https://peaceful-sands-32571.herokuapp.com/


## Credits

Tutor: Doug Kumagai:
<br />
https://www.linkedin.com/in/doug-kumagai/
<br />
https://github.com/ndesmic
<br />

mdn web docs: https://developer.mozilla.org/en-US/

Markdown License badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

shields.io: https://shields.io/

Get started with Apollo Server: https://www.apollographql.com/docs/apollo-server/getting-started/

Bootstrap docs: https://getbootstrap.com/

DOM Elements: https://legacy.reactjs.org/docs/dom-elements.html#style

solid-broccoli for starter code: https://github.com/coding-boot-camp/solid-broccoli


## License

Please refer to the LICENSE in the repo.

---

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



