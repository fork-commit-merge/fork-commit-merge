<div align="center">

![Fork, Commit, Merge](/assets/images/fork-commit-merge-web-banner.png)
[![Version 1.0.2](https://img.shields.io/badge/Version-1.0.2-orange.svg)](https://github.com/nikohoffren/fork-commit-merge/pulls)
[![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PR:s Welcome](https://img.shields.io/badge/PR:s-Welcome-brightgreen.svg)](https://github.com/nikohoffren/fork-commit-merge/pulls)
[![Contributors Welcome](https://img.shields.io/badge/Contributors-Welcome-purple.svg)](https://github.com/nikohoffren/fork-commit-merge/pulls)
[![First Contributors](https://img.shields.io/badge/first-contributors-brightgreen.svg)](https://github.com/nikohoffren/fork-commit-merge/pulls)
![GitHub repo size](https://img.shields.io/github/repo-size/nikohoffren/fork-commit-merge)

<br>
Welcome to "Fork, Commit, Merge"!<br>A project designed to help you familiarize yourself with the open source contribution workflow on GitHub.

More info about this project, contributing and open source resources, are available on our website at
<br>[forkcommitmerge.vercel.app](https://forkcommitmerge.vercel.app)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Jest](https://img.shields.io/badge/jest-%23E34F26.svg?style=for-the-badge&logo=jest&logoColor=white) ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)


</div>

## Table of Contents

-   [Prerequisites](#prerequisites)
-   [Setup Instructions](#setup-instructions)
-   [Tasks](#tasks)
-   [Submitting Your Changes](#submitting-your-changes)
-   [Influences](#influences)
-   [What's Next?](#whats-next)
-   [Contact](#contact)
-   [License](#license)
-   [List of Contibutors](#list-of-contributors)

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
git clone https://github.com/<your-username>/fork-commit-merge.git
```

Replace '<your-username>' with your GitHub username.

3. Navigate to your project folder and install the necessary dependencies. If you are solving the HTML or CSS issues, you don't need to run `npm i`.

```bash
cd fork-commit-merge
npm i
```

4. Create a new branch with the command:

```bash
git switch -c fix-issue
```

## Tasks

We present several tasks with different languages and varying difficulty.
Firstly, open the `tasks` directory and select which language you want to work with by opening one of the following directories:
-   HTML
-   CSS
-   JavaScript
-   TypeScript
-   Markdown

Then you can open one of these directories to choose between three difficulties:
-   Easy
-   Medium
-   Hard

After that you are ready to get solving!

Go to the task you selected to get more info about the issue by clicking one of the following:

[HTML - Easy](https://github.com/nikohoffren/fork-commit-merge/issues/41)

[JavaScript - Medium](https://github.com/nikohoffren/fork-commit-merge/issues/40)

[JavaScript - Hard](https://github.com/nikohoffren/fork-commit-merge/issues/42)

[TypeScript - Easy](https://github.com/nikohoffren/fork-commit-merge/issues/54)

[Markdown - Easy](https://github.com/nikohoffren/fork-commit-merge/issues/50)

[Markdown - Medium](https://github.com/nikohoffren/fork-commit-merge/issues/51)

[Markdown - Hard](https://github.com/nikohoffren/fork-commit-merge/issues/56)

## Submitting Your Changes

Once you've made the necessary changes and all the tests are passing, you're ready to submit your changes!

1. Stage your changes with the command:

```bash
git add .
```

2. Commit your changes with the command:

```bash
git commit -m "Fixed issue"
```

3. Push your changes to your forked repository with the command:

```bash
git push -u origin fix-issue
```

Once you've pushed your changes to GitHub, you're ready to create a pull request. Go to your forked repository on GitHub.

-   You should see text "fork-commit-merge had recent pushes" and button "Compare & Pull request" next to it.

-   Click the "Compare & Pull request" button to proceed to the pull request page of the original fork-commit-merge repository.

-   Fill in the title and description boxes to inform what you did to make all of the tests pass successfully.

-   Finally, click "Create pull request" to finish creating the pull request.

Congratulations on making your first open source contribution on GitHub!

Sit back and wait for a response and feedback of the pull request. If everything is working fine, you should get the pull request merged.

After the merge, actions-user bot will reset the files for the next contributor.

All the contributors of this project will also be added to the List of Contributors in our [website](https://forkcommitmerge.vercel.app)!

## Influences

This project was inspired by a number of fantastic resources designed to help newcomers make their first contributions to open source. In particular, we would like to acknowledge:

- [First Contributions](https://github.com/firstcontributions/first-contributions): A hands-on guide to making your first open source contribution.
- [Contribute To This Project](https://github.com/Syknapse/Contribute-To-This-Project): A project that encourages contributors to add their own profile information.
- [Contribute to Open Source](https://github.com/danthareja/contribute-to-open-source): A project that simulates the GitHub workflow to help beginners get their first taste of open source.

I highly recommend checking out these projects if you want to learn more about contributing to open source!

## What's Next?

Congratulations on making your first open source contribution! If you're looking for more ways to contribute, I invite you to check out my other projects. Just click [here](https://github.com/nikohoffren) to find more. These projects contain real issues that you can help resolve. Also i would really appreciate if you could leave a star, so more developers can find this project. I look forward to seeing your contributions!

## Contact

For any queries, feel free to open an issue or reach out to me at niko.hoffren@gmail.com.

## License

This project is licensed under the terms of the [MIT License](LICENSE).

## List of Contributors

Massive thanks to all of the these fine individuals who contributed to this project!

<a href="https://github.com/nakel-ola"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/109567025?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/ChrisM922"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/112943995?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/jaas666"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/30204147?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/radhey30"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/89542093?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/Akiva1992"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/107344160?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/kabszac"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/69686216?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/HunterStarets"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/17518254?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/Rajdeep1311"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/113296626?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/dependabot[bot]"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/49699333?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/DarshanDixit05"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/76871537?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/sakibian"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/40847839?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/Nkiriobasi"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/88588310?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/Nitin-kumar199"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/112743746?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
