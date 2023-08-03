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
<br>[forkcommitmerge.io](https://forkcommitmerge.io)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![JSON](https://img.shields.io/badge/json-%23000000.svg?style=for-the-badge&logo=json&logoColor=blue) ![Jest](https://img.shields.io/badge/jest-%23E34F26.svg?style=for-the-badge&logo=jest&logoColor=white) ![Python](https://img.shields.io/badge/python-%23007ACC.svg?style=for-the-badge&logo=python&logoColor=yellow) ![Ruby](https://img.shields.io/badge/ruby-%23E34F26.svg?style=for-the-badge&logo=ruby&logoColor=white) ![PHP](https://img.shields.io/badge/php-%23007ACC.svg?style=for-the-badge&logo=phpn&logoColor=white) ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)


</div>

## Table of Contents

-   [Prerequisites](#prerequisites)
-   [Setup Instructions](#setup-instructions)
-   [Tasks](#tasks)
-   [Submitting Your Changes](#submitting-your-changes)
-   [Influences](#influences)
-   [What's Next?](#whats-next)
-   [Creating New Tasks](#creating-new-tasks)
-   [Contact](#contact)
-   [License](#license)
-   [List of Contibutors](#list-of-contributors)

## Prerequisites

Before you start, you'll need to install Git.

Also:
-   If you are solving JavaScript or TypeScript related issues, you need to install Node.js, and npm.
-   If your are solving Python related issues, you need to install Python.
-   If you are solving Ruby related issues, you need to install Ruby.
-   IF you are solving PHP related issues, you need to install PHP.
-   If you are solving only HTML, CSS, JSON or Markdown related issues, you don't need to install anything else.

### Installing Git

Git is a version control system that lets you manage and keep track of your source code history.

- For Linux users, you can install Git via your distribution's package manager. For example, on Arch you would use the command: `sudo pacman -S git` and in Ubuntu/Debian: `sudo apt-get install git`
- For macOS users, you can install Git via [Homebrew](https://brew.sh/) with the command: `brew install git`
- For Windows users, download Git from [Git for Windows](https://gitforwindows.org/) and follow the installation instructions.

### Installing Node.js and npm

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, and npm is a package manager for Node.js.

- You can download Node.js and npm from the [official Node.js website](https://nodejs.org/en/download/). This will install both Node.js and npm on your machine. Follow the instructions on the website to install them.

### Installing Python

#### Windows:

-   Visit the official Python website's download page.
-   Click on the latest Python release.
-   Scroll down to the Files section and download the Windows x86-64 executable installer for 64-bit version of Windows.
-   Run the installer file and follow the instructions, making sure to tick the box that says "Add Python to PATH" before clicking Install Now.

#### Mac OS:

Mac OS X should come pre-installed with Python, but in case it's not installed, here's how to install it:

-   Visit the official Python website's download page.
-   Click on the latest Python release.
-   Download the macOS 64-bit installer.
-   Open the downloaded .pkg file and follow the instructions to install Python.

#### Linux:

Most Linux distributions come with Python pre-installed. To check if you have Python installed, open a terminal and type `python3 --version`.

If you need to install or upgrade Python, you can do so with the package manager for your Linux distribution. For Ubuntu, you can use the following commands:

```bash
sudo apt update
sudo apt install python3
```

### Installing Ruby

#### Windows:

Download the RubyInstaller for Windows from the [official website](https://rubyinstaller.org/).
Run the installer package and follow the on-screen instructions.

#### Mac OS:
Ruby comes pre-installed on Mac OS X, but if you need to upgrade or install a different version, you can use Homebrew or RVM (Ruby Version Manager).

**With Homebrew**:

Open terminal and type `brew install ruby`

**With RVM**:

Open Terminal and type `\curl -sSL https://get.rvm.io | bash -s stable`
Then install Ruby with `rvm install ruby`

#### Linux:
**Ubuntu/Debian**:

Open Terminal and type `sudo apt-get install ruby-full`

**Arch Linux**:

Open Terminal and type `sudo pacman -S ruby`

For other Linux distributions, the command may be different. Refer to the documentation specific to your package manager.

### Installing PHP

Windows:

-   Download the PHP ZIP package from https://windows.php.net/download.
-   Extract the ZIP file and rename the extracted directory to php.
-   Move the php directory to C:\.
-   Add C:\php to your system's PATH environment variable.

Mac OS:

PHP comes pre-installed on Mac OS X. To upgrade or install a different version, consider using Homebrew:

-   Open Terminal and type `brew install php`.

Linux (Ubuntu/Debian):

-   Open Terminal and type `sudo apt install php`.

## Setup Instructions

1. Fork this repository by clicking on the "Fork" button at the top-right corner of this page. This creates a copy of the repository in your GitHub account.
2. Clone your forked repository to your local machine with the command:

```bash
git clone https://github.com/<your-username>/fork-commit-merge.git
```

Replace '<your-username>' with your GitHub username.

3. Navigate to your project folder and install the necessary dependencies. If you are solving other than JavaScript or TypeScript issues, you don't need to run `npm i`.

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
-   Python
-   Ruby
-   PHP
-   JSON
-   Markdown

Then you can open one of these directories to choose between three difficulties:
-   Easy
-   Medium
-   Hard

After that you are ready to get solving!

Go to the task you selected to get more info about the issue by clicking one of the following:

[HTML - Easy](https://github.com/nikohoffren/fork-commit-merge/issues/41)

[CSS - Easy](https://github.com/nikohoffren/fork-commit-merge/issues/59)

[CSS - Medium](https://github.com/nikohoffren/fork-commit-merge/issues/60)

[JavaScript - Medium](https://github.com/nikohoffren/fork-commit-merge/issues/63)

[JavaScript - Hard](https://github.com/nikohoffren/fork-commit-merge/issues/42)

[TypeScript - Easy](https://github.com/nikohoffren/fork-commit-merge/issues/54)

[Python - Easy](https://github.com/nikohoffren/fork-commit-merge/issues/79)

[Ruby - Easy](https://github.com/nikohoffren/fork-commit-merge/issues/66)

[PHP - Easy](https://github.com/nikohoffren/fork-commit-merge/issues/81)

[JSON - Easy](https://github.com/nikohoffren/fork-commit-merge/issues/76)

[Markdown - Easy](https://github.com/nikohoffren/fork-commit-merge/issues/50)

[Markdown - Medium](https://github.com/nikohoffren/fork-commit-merge/issues/51)

[Markdown - Hard](https://github.com/nikohoffren/fork-commit-merge/issues/56)

*Note: You don't have to ask a permission to start solving the issue or get assigned, since these issues are supposed to always be open for new contributors. You can just simply start working with the issue right away!*

## Submitting Your Changes

Once you've made the necessary changes and all the tests are passing, you're ready to submit your changes!

1. Stage your changes with the command:

```bash
git add files-that-you-changed
```

2. Commit your changes with the command:

```bash
git commit -m "Fixed issue"
```

3. Push your changes to your forked repository with the command:

```bash
git push origin fix-issue
```

Once you've pushed your changes to GitHub, you're ready to create a pull request. Go to your forked repository on GitHub.

-   You should see text "fork-commit-merge had recent pushes" and button "Compare & Pull request" next to it.

-   Click the "Compare & Pull request" button to proceed to the pull request page of the original fork-commit-merge repository.

-   Fill in the title and description boxes to inform what you did to make all of the tests pass successfully.

-   Finally, click "Create pull request" to finish creating the pull request.

Congratulations on making your first open source contribution on GitHub!

Sit back and wait for a response and feedback of the pull request. If everything is working fine, you should get the pull request merged.

After the merge, actions-user bot will reset the files for the next contributor.

All the contributors of this project will also be added to the List of Contributors in our [website](https://forkcommitmerge.io)!

## Influences

This project was inspired by a number of fantastic resources designed to help newcomers make their first contributions to open source. In particular, we would like to acknowledge:

- [First Contributions](https://github.com/firstcontributions/first-contributions): A hands-on guide to making your first open source contribution.
- [Contribute To This Project](https://github.com/Syknapse/Contribute-To-This-Project): A project that encourages contributors to add their own profile information.
- [Contribute to Open Source](https://github.com/danthareja/contribute-to-open-source): A project that simulates the GitHub workflow to help beginners get their first taste of open source.

I highly recommend checking out these projects if you want to learn more about contributing to open source!

## What's Next?

Congratulations on making your first open source contribution! If you're looking for more ways to contribute, I invite you to check out my other projects. Just click [here](https://github.com/nikohoffren) to find more. These projects contain real issues that you can help resolve. Also i would really appreciate if you could leave a star, so more developers can find this project. I look forward to seeing your contributions!

## Creating New Tasks

Feel free to contribute to this project also by creating new tasks for other contributors to tackle. To do so, please submit a pull request containing detailed information about the task, including relevant code examples. We encourage you to propose tasks across the programming languages already represented in our project, as this helps broaden its versatility and accessibility for developers worldwide.

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
<a href="https://github.com/Nitin-kumar199 "><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/112743746?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/EmekaManuel"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/107403276?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/Ereakin"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/98915665?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/Davidthecode"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/99010198?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/Jonnie-Dev"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/73708569?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/rangaraju29139"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/30431968?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/Himanshukrabc"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/68722052?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/Chemin7"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/67341387?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/srish-ti"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/25656561?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/Aishagojo"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/124359762?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/alvarotorrestx"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/79110517?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/vinayyak"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/60383210?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/chiefkarim"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/73248301?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/python-fuse"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129158431?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
