# Learn to Contribute
[![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PR:s Welcome](https://img.shields.io/badge/PR:s-Welcome-brightgreen.svg)](https://github.com/nikohoffren/puck-hub/pulls)

Welcome to "Learn to Contribute", a project designed to help you familiarize yourself with the open source contribution workflow on GitHub!

This project involves a simple Book Library application written in JavaScript. The application allows you to create a book, get information about a book, update a book's information, and delete a book. There are some Jest tests for this application, but they're failing...

Your task is to make these tests pass!

This project involves using the terminal, but don't be afraid! If you're new to the terminal, it's just another way to interact with your computer. All the commands you'll need are provided in this README. By following along, you'll get comfortable using the terminal in no time.

## Table of Contents

-   [Prerequisites](#prerequisites)
-   [Setup Instructions](#setup-instructions)
-   [Task](#task)
-   [Submitting Your Changes](#submitting-your-changes)
-   [Influences](#influences)
-   [What's Next?](#whats-next)
-   [License](#license)
-   [Contact](#contact)

## Prerequisites

Before you start, you'll need to install Git, Node.js, and npm.

### Installing Git

Git is a version control system that lets you manage and keep track of your source code history.

- For Linux users, you can install Git via your distribution's package manager. For example, on Arch you would use the command: `sudo pacman -S git` and in Ubuntu/Debian: `sudo apt-get install git`
- For macOS users, you can install Git via [Homebrew](https://brew.sh/) with the command: `brew install git`
- For Windows users, download Git from [Git for Windows](https://gitforwindows.org/) and follow the installation instructions.

### Installing Node.js and npm

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, and npm is a package manager for Node.js.

- You can download Node.js and npm from the [official Node.js website](https://nodejs.org/en/download/). This will install both Node.js and npm on your machine. Follow the instructions on the website to install them.


## Setup Instructions

1. Fork this repository by clicking on the "Fork" button at the top-right corner of this page. This creates a copy of the repository in your GitHub account.
2. Clone your forked repository to your local machine with the command:

```bash
git clone https://github.com/your-username/learn-to-contribute.git
```

Replace 'your-username' with your GitHub username.

3. Navigate to your project folder and install the necessary dependencies with the commands:

```bash
cd learn-to-contribute
npm install
```

4. Create a new branch with the command:

```bash
git switch -c fix-tests
```

5. Run the test suite with the command:

```bash
npm test
```

You'll find that all four tests are failing.

## Task

Your task is to make the tests pass. You'll need to inspect the tests in __tests__/library.test.js, figure out why they're failing, and make the necessary changes.
Running `npm test` will give you some helpful information about what is wrong with the tests.

Note: You shouldn't need to modify the source code in src/library.js.

## Submitting Your Changes

Once you've made the necessary changes and all the tests are passing, you're ready to submit your changes!

1. Stage your changes with the command:

```bash
git add <file-that-you-changed>
```

2. Commit your changes with the command:

```bash
git commit -m "Fixed failing tests"
```

3. Push your changes to your forked repository with the command:

```bash
git push -u origin fix-tests
```

Once you've pushed your changes to GitHub, you're ready to create a pull request. Go to your forked repository on GitHub.

-   You should see text "learn-to-contribute had recent pushes" and button "Compare & Pull request" next to it.

-   Click the "Compare & Pull request" button to proceed to the pull request page of the original learn-to-contribute repository.

-   Fill in the title and description boxes to inform what you did to make all of the tests pass successfully.

-   Finally, click "Create pull request" to finish creating the pull request.

Congratulations on making your first open source contribution on GitHub!

Sit back and wait for a response and feedback of the pull request. If everything is working fine, you should get the pull request merged.

## Influences

This project was inspired by a number of fantastic resources designed to help newcomers make their first contributions to open source. In particular, we would like to acknowledge:

- [First Contributions](https://github.com/firstcontributions/first-contributions): A hands-on guide to making your first open source contribution.
- [Contribute To This Project](https://github.com/Syknapse/Contribute-To-This-Project): A project that encourages contributors to add their own profile information.
- [Contribute to Open Source](https://github.com/danthareja/contribute-to-open-source): A project that simulates the GitHub workflow to help beginners get their first taste of open source.

I highly recommend checking out these projects if you want to learn more about contributing to open source!

## What's Next?

Congratulations on making your first open source contribution! If you're looking for more ways to contribute, I invite you to check out my other projects. Just click my username to find more. These projects contain real issues that you can help resolve. I look forward to seeing your contributions!


## License

This project is licensed under the terms of the MIT license.

## Contact

For any queries, feel free to open an issue or reach out to me at niko.hoffren@gmail.com.

BOT TEST TEN
