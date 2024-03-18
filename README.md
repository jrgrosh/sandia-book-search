# BookFinder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Project Requirements

### Assignment 
Create an application that will allow users to search for books by entering a query (Title, Author, etc). Display the resulting books in a list on the page with all the corresponding data. Your data source will be the Google Books API.

### User Stories
    • User can enter a search query into an input field
    • User can submit the query. This will call an API that will return an array of books with the corresponding data (Title, Author, Published Date, Picture, etc)
    • User can see the list of books appearing on the page

## Solution
I created this Angular project to create a front-end solution that meets the above requirements. I chose Angular because it is a powerful front-end framework that I am familiar with.

This project is composed of three components. Firstly, a parent component that conducts data retrieval and manages the application state. Secondly, simple-search, a component that handles user input. Lastly, display-results, a component that lists the books found by the user query.

Splitting these responsibilities into three components seemed like the easiest option. Routing would have been too cumbersome of a solution for such a small scale project. Combining all logic into a single component would make the project more difficult to manage and debug.

### Optional Features
Loading GIF added.
Error handling implemented.

### Final thoughts
Given more time, I would add the following features:
    • Tests
    • Bonus Features as listed in project assignment
    • Paging of data to handle increased numbers of search results
    • "View" Interfaces that are focused on presenting the data and fleshing out of existing interfaces
    • Attention from a graphic artist

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
