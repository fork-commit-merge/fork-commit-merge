# Learn to Contribute

Welcome to "Learn to Contribute", a project designed to help you familiarize yourself with the open source contribution workflow on GitHub!

This project involves a simple Book Library application written in JavaScript. The application allows you to create a book, get information about a book, update a book's information, and delete a book. There are some Jest tests for this application, but they're failing... Your task is to make these tests pass!

## Setup Instructions

Before you start, you'll need to have [Node.js](https://nodejs.org/en/download/) and npm installed on your machine.

1. Fork this repository by clicking on the "Fork" button at the top-right corner of this page. This creates a copy of the repository in your GitHub account.
2. Clone your forked repository to your local machine with the command:

```bash
git clone https://github.com/nikohoffren/learn-to-contribute.git


    Navigate to your project folder and install the necessary dependencies with the commands:

bash

cd learn-to-contribute
npm install

    Run the test suite with the command:

bash

npm test

You'll find that all four tests are failing.
Task

Your task is to make the tests pass. You'll need to inspect the tests in __tests__/library.test.js, figure out why they're failing, and make the necessary changes.

Note: You shouldn't need to modify the source code in src/library.js.
Submitting Your Changes

Once you've made the necessary changes and all the tests are passing, you're ready to submit your changes!

    Create a new branch for your changes with the command:

bash

git checkout -b fix-tests

    Stage your changes with the command:

bash

git add .

    Commit your changes with the command:

bash

git commit -m "Fixed failing tests"

    Push your changes to your forked repository with the command:

bash

git push origin fix-tests

    Finally, open your forked repository on GitHub and click on the "Pull request" button to create a new pull request.

Congratulations on making your first open source contribution on GitHub!
License

This project is licensed under the terms of the ISC license.

css


This README provides all the necessary instructions for a newcomer to fork the repository, clone it to their local machine, make changes, commit and push those changes, and finally open a pull request. It's a great starting point for someone who's new to Git, GitHub, and the open source contribution workflow.
