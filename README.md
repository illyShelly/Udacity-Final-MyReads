# MyReads Udacity Project

This is **Project #7** which is developed for Google Front-End Nanodegree Program at Udacity made with REACT. Project was started from scratch. Web application is available on **[GithubPages](https://illyShelly.github.io/udacity-final-myreads)**

## Table of Contents

* [Overview](#overview)
* [How to Run Application](#how-to-run-application)
* [To Get Started](#how-to-run-application)
* [About The Project](#about-the-project)
* [Contribution](#contribution)

## Overview

This is Project #7 made for Udacity classroom on FEND+React track. To achieve the requirements - students can either use starter code provided by Udacity or build the project from scratch using this file [`BooksAPI.js`](src/BooksAPI.js) providing operations on backend side.

#### Starter Code
> link https://github.com/udacity/reactnd-project-myreads-starter

#### From Scratch
> link https://github.com/facebook/create-react-app

#### Specification

The starter code containes all the CSS and HTML markup to save you some time without any React code. The goal is to add interactivity to the app by refactoring the static code using React components.

#### Backend Server

To simplify development process, there is provided a backend server for students to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods that will be needed to perform necessary operations on the backend side:
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

#### Important
The **backend API** uses a fixed set of cached search results that is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

#### React Components Structure
```
<App />
    <!-- <Route /> path='/' -->

    <Mainpage />
      <Shelf />
        <Book />
          <Switcher />
    <Footer />

    <!-- <Route /> path='/search' -->

    <Searchpage />
      <Book />
        <Switcher />

```

## To Get Started

### Interact directly on GithubPages
**[GithubPages](https://illyShelly.github.io/udacity-final-myreads)**

### Locally on your machine
* Download the repo
* `cd` _udacity-final-myreads_ folder
* Install all dependencies with `yarn install or npm install`
* Start the server with `yarn start or npm start`
* If not opening automatically in your browser, visit `http://localhost:3000`

## About The Project

The goal of the application is to help you to manage the state of a list of books on main page. You have the choice between 3 shelves:

* Currently Reading (Reading Right Now)
* Want to Read (Desire to Read)
* Read (Just Finished)

You can add new book by pressing the ***+*** link in navbar or in the "/search" page.

Each of book has the button to move the book between shelves or remove it entirely from main page.


### Dependencies

* React Router - [`react-router-dom`](https://www.npmjs.com/package/react-router-dom)


## Contribution

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
