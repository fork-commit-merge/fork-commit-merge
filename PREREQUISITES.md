# Prerequisites

This document contains installation instructions for various programming languages, frameworks, and tools that you might need while working on this project.

- Before you start, you'll need to install [Git](#installing-git).
- For HTML, HTMX, CSS, Bootstrap, JSON, YAML, TOML, XML or Markdown related issues, you don't need to install anything extra.
- For SASS related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).
- For Tailwind CSS related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).
- For ReScript related issues, you need to install [Node.js and NPM](#installing-rescript).
- For CoffeeScript related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm) as well as [CoffeeScript](#installing-coffeescript).
- For JavaScript related issues, you need to install [Node.js and NPM](#installing-javascript).
- For TypeScript related issues, you need to install [Node.js and NPM](#installing-typescript).
- For React related issues, you need to install [Node.js and NPM](#installing-react).
- For Next.js related issues, you need to install [Node.js and NPM](#installing-nextjs).
- For Three.js related issues, you need to install [Node.js and NPM](#installing-threejs).
- For Vue.js related issues, you need to install [Node.js and NPM](#installing-vue).
- For Svelte related issues, you need to install [Node.js and NPM](#installing-svelte).
- For Astro related issues, you need to install [Node.js and NPM](#installing-astro).
- For Angular related issues, you need to install [Node.js and NPM](#installing-angular).
- For Ember.js related issues, you need to install [Node.js and NPM](#installing-emberjs).
- For GraphQL related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).
- For NGINX related issues, you need to install [NGINX](#installing-nginx).
- For Express.js related issues, you need to install [Node.js and NPM](#installing-expressjs).
- For Electron.js related issues, you need to install [Node.js and NPM](#installing-electronjs).
- For Jest related issues, you need to install [Node.js and NPM](#installing-jest).
- For Jasmine related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).
- For Vitest related issues, you need to install [Node.js and NPM](#installing-vitest).
- For C related issues, you need to install [C](#installing-c).
- For C++ related issues, you need to install [C++](#installing-c).
- For C# related issues, you need to install [C# (Dotnet-SDK)](#installing-c-dotnet-sdk).
- For Blazor related issues, you need to install [Blazor (Dotnet-SDK)](#installing-blazor-dotnet-sdk).
- For D related issues, you need to install [D (DMD Compiler)](#installing-d-dmd-compiler).
- For F# related issues, you need to install [F# (Dotnet-SDK)](#installing-f-dotnet-sdk).
- For Ada related issues, you need to install [Ada](#installing-ada).
- For Java related issues, you need to install [Java](#installing-java).
- For Kotlin related issues, you need to install [Kotlin](#installing-kotlin) and [Java](#installing-java).
- For Scala related issues, you need to install [Scala](#installing-scala).
- For Groovy related issues, you need to install [Java](#installing-java) and [Groovy](#installing-groovy).
- For Python related issues, you need to install [Python](#installing-python).
- For Flask related issues, you need to install [Python](#installing-python) and [Flask](#installing-flask).
- For Django related issues, you need to install [Python](#installing-python) and [Django](#installing-django).
- For Solidity related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm) as well as [Installing Solidity (Truffle Ethereum Development Environment)](#installing-solidity-truffle-ethereum-development-environment).
- For Vyper related issues, you need to install [Vyper](#installing-vyper).
- For Ruby related issues, you need to install [Ruby](#installing-ruby).
- For Rails related issues, you need to install [Ruby](#installing-ruby) and [Rails](#installing-rails).
- For Elixir related issues, you need to install [Elixir](#installing-elixir).
- For Crystal related issues, you need to install [Crystal](#installing-crystal).
- For PHP related issues, you need to install [PHP](#installing-php).
- For Laravel related issues, you need to install [PHP](#installing-php) and [Laravel](#installing-laravel).
- For Go related issues, you need to install [Golang](#installing-golang).
- For Dart related issues, you need to install [Dart](#installing-dart).
- For Flutter related issues, you need to install [Dart](#installing-dart) and [Flutter](#installing-flutter).
- For Swift related issues, you need to install [Swift](#installing-swift).
- For React Native related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm) as well as [React Native](#installing-react-native).
- For Julia related issues, you need to install [Julia](#installing-julia).
- For Rust related issues, you need to install [Rust](#installing-rust).
- For Haskell related issues, you need to install [Haskell](#installing-haskell).
- For Lua related issues, you need to install [Lua](#installing-lua).
- For Clojure related issues, you need to install [Clojure](#installing-clojure).
- For OCaml related issues, you need to install [OCaml](#installing-ocaml).
- For LaTeX related issues, you need to install [LaTeX](#installing-latex).
- For Lisp related issues, you need to install [Lisp](#installing-lisp).
- For Fortran related issues, you need to install [Fortran](#installing-fortran).
- For Pascal related issues, you need to install [Pascal](#installing-pascal).
- For COBOL related issues, you need to install [COBOL](#installing-cobol).
- For Erlang related issues, you need to install [Erlang](#installing-erlang).
- For Smalltalk related issues, you need to install [Smalltalk](#installing-smalltalk).
- For Zig related issues, you need to install [Zig](#installing-zig).
- For R related issues, you need to install [R](#installing-r).
- For Nim related issues, you need to install [Nim](#installing-nim).
- For MATLAB related issues, you need to install [MATLAB](#installing-matlab).
- For Octave related issues, you need to install [Octave](#installing-octave).
- For SQL related issues, you need to install [sqlite3](#installing-sqlite3).
- For TLA+ related issues, you need to install [TLA+ Toolbox](#installing-tla-toolbox).
- For Bash related issues, you need to install [Bash](#installing-bash).
- For Perl related issues, you need to install [Perl](#installing-perl).
- For ASM (Assembly) related issues, you need to install [ASM](#installing-asm).
- For Docker related issues, you need to install [Docker](#installing-docker).
- For Kubernetes related issues, you need to install [Kubernetes](#installing-kubernetes).

---

### Installing an IDE

An Integrated Development Environment (IDE) is a software application that consolidates basic tools required for software testing and development. An IDE typically consists of a source code editor, build automation tools, and a debugger. Some IDEs, like Android Studio or Visual Studio, even offer more advanced features such as version control, databases, cloud services, and more. Why use an IDE? Using an IDE can significantly speed up the development process by offering a variety of tools and features under one roof.

Here are a few reasons why developers use IDEs:

- Efficiency: With everything in one place, developers can write, test, and debug code without needing to switch between different tools.

- Code Assistance: Many IDEs offer features like autocompletion, syntax highlighting, and suggestions, making the code-writing process smoother.

- Integrated Debugging: Integrated debuggers allow developers to test and debug their programs within the IDE, speeding up the development cycle.

- Extensions & Plugins: Most modern IDEs support a wide range of extensions and plugins, enabling developers to customize their environment and add even more functionalities.

We recommend using VS Code as your IDE for this project. It's free, open-source, and supports a wide range of languages and extensions. You can download it from the [VS Code - Official website](https://code.visualstudio.com/). However, if you prefer to use another IDE, that's fine too!

Instructions on how to install an IDE that suits for you can be found on our website at [forkcommitmerge.dev/tools/ide](https://www.forkcommitmerge.dev/tools/ide)!

---

### Installing Git

Git is a version control system that lets you manage and keep track of your source code history.

- For Linux users, you can install Git via your distribution's package manager. For example, on Arch you would use the command: `sudo pacman -S git` and in Ubuntu/Debian: `sudo apt-get install git`
- For macOS users, you can install Git via [Homebrew](https://brew.sh/) with the command: `brew install git`
- For Windows users, download Git from [Git for Windows](https://gitforwindows.org/) and follow the installation instructions.

---

### Installing Node.js and NPM

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, and NPM is a package manager for Node.js.

- You can download Node.js and NPM from the [official Node.js website](https://nodejs.org/en/download/). This will install both Node.js and NPM on your machine. Follow the instructions on the website to install them.

---

### Installing SASS

For SASS related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Tailwind CSS

For Tailwind CSS related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing ReScript

For ReScript related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing CoffeeScript

CoffeeScript is a programming language that transcompiles to JavaScript. It adds syntactic sugar inspired by Ruby, Python, and Haskell in an effort to enhance JavaScript's brevity and readability.

First you have to make sure you have [Node.js and NPM](#installing-nodejs-and-npm) installed.

Install CoffeeScript with this command:

```bash
npm install --global coffeescript
```

---

### Installing JavaScript

For JavaScript related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing TypeScript

For TypeScript related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing React

For React related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Next.js

For Next.js related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Three.js

For Three.js related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Vue.js

For Vue.js related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Svelte

For Svelte related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Astro

For Astro related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Angular

For Angular related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Solid.js

For Solid.js related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Ember.js

For Ember.js related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing GraphQL

For GraphQL related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing NGINX

- For macOS:

Install Homebrew if you haven't:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install NGINX:

```bash
brew install nginx
```

- For Linux (Ubuntu/Debian):

Install NGINX:

```bash
sudo apt install nginx
```

- For Windows:

Follow [this guide](https://nginx.org/en/docs/windows.html) to install NGINX on Windows.

### Installing Express.js

For Express.js related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Electron.js

For Electron.js related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Jest

For Jest related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Jasmine

For Jasmine related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing Vitest

For Vitest related issues, you need to install [Node.js and NPM](#installing-nodejs-and-npm).

---

### Installing C

Setup the C environment in VS Code:

- Install the C/C++ extension for VS Code.

Set up a compiler:

- Windows: Install [MinGW](https://www.mingw-w64.org/).
- macOS: Ensure you have the Xcode Command Line Tools installed (xcode-select --install).
- Linux: Most distributions come with gcc installed, but if not, you can typically install it using your package manager (e.g., `sudo apt install gcc` for Debian-based distributions).

---

### Installing C++

If you are using VS Code, you can install the C++ extension:
Launch VS Code, head to Extensions (or press Ctrl+Shift+X), and search for C++. Install the one by Microsoft called C/C++.

Install a C++ Compiler:

- Windows: Install [Mingw-w64](https://www.mingw-w64.org/doku.php) or [TDM-GCC](https://jmeubank.github.io/tdm-gcc/). After installation, make sure the compiler's bin directory is in your system's PATH.
- Linux: You can usually install the GCC compiler with your distribution's package manager. For example, on Ubuntu/Debian, you'd run `sudo apt-get install g++`.
- Mac: Install Xcode from the App Store. Once Xcode is installed, you'll also have the compiler.

---

### Installing C# (Dotnet-SDK)

#### Windows

Using the Installer:

- Go to the .NET download page.
- Under the ".NET SDK" section, choose your preferred version.
- Click on the "Download x64" or "Download Arm" button for Windows.
- Once downloaded, run the installer and follow the on-screen instructions.

Using the Command Line with Chocolatey:

If you have Chocolatey installed, you can use it to install the .NET SDK:

```bash
choco install dotnet-sdk
```

#### Linux

The instructions can vary depending on the Linux distribution. Here's a general overview:

- Go to the .NET download page.
- Under the ".NET SDK" section, choose your preferred version.
- Select your specific Linux distribution from the list to get detailed instructions.

For example, for Ubuntu, the instructions at the time of writing are:

```bash
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb

sudo apt-get update
sudo apt-get install -y apt-transport-https
sudo apt-get update
sudo apt-get install -y dotnet-sdk
```

And for Arch Linux, you can just install the dotnet-sdk package from the official repositories:

```bash
sudo pacman -S dotnet-sdk
```

Please note that the version and specific commands can change, so always refer to the official documentation for the most up-to-date instructions.

#### macOS

Using the Installer:

- Go to the .NET download page.
- Under the ".NET SDK" section, choose your preferred version.
- Click on the "Download .NET SDK" button for macOS.
- Once downloaded, run the installer and follow the on-screen instructions.

Using Homebrew:

If you have Homebrew installed, you can use it to install the .NET SDK:

```bash
brew install --cask dotnet-sdk
```

After installation, you can test if it's installed correctly by running:

```bash
dotnet --version
```

Setting up C# in Visual Studio Code:

- Launch Visual Studio Code.
- Open the Extensions view (Ctrl+Shift+X).
- Search for the C# extension provided by Microsoft and install it.
- Once the extension is installed, it will prompt you to install the .NET Core SDK if it's not already installed. Please follow the link and instructions to install it.

---

### Installing Blazor (Dotnet-SDK)

Look the instructions for [C# (Dotnet-SDK)](#installing-c-dotnet-sdk) to install the .NET SDK.

---

### Installing D (DMD Compiler)

For Windows and macOS, you can download the DMD (D Compiler) from the [official website](https://dlang.org/download.html) and follow the installation instructions.
For Linux you can use your package manager, for example in Arch Linux you can install DMD with `sudo pacman -S dmd`.

VS Code Setup:

- Open VS Code and go to Extensions (or press Ctrl+Shift+X).
- Search for "D Programming Language (code-d)" and install it. This will add D language support in VS Code.

---

### Installing F# (Dotnet-SDK)

For Windows Users:

- F# comes bundled with Visual Studio, so installing [Visual Studio](https://visualstudio.microsoft.com/vs/features/net-development/) with .NET support should suffice.
- Alternatively, you can also install F# through the [.NET SDK](https://dotnet.microsoft.com/en-us/download).

For macOS and Linux Users:

- Install [Mono](https://www.mono-project.com/).
- Alternatively, you can also install F# through the [.NET SDK](https://dotnet.microsoft.com/en-us/download).

Visual Studio Code:

- Install the Ionide for F# extension for F# support in VS Code.

---

### Installing Ada

Windows:

- Download GNAT Community edition for Ada from here.
- Install GNAT.
- Add the GNAT bin directory to your PATH environment variable.

macOS/Linux:

- Open your terminal.
- Install GNAT via package manager. For example, on macOS with Homebrew: `brew install gnat` or on Ubuntu: `sudo apt install gnat`.
- Confirm installation by running `gnatls --version`.

---

### Installing Java

Install Java Development Kit (JDK):

Before working with Java in VS Code, you must have the Java Development Kit (JDK) installed on your machine.

- Windows/Mac/Linux: You can download the JDK from [Oracle's official website](https://www.oracle.com/java/technologies/downloads/#java11) or opt for OpenJDK.

Install Java Extensions for VS Code:

- Open VS Code, go to the Extensions view by clicking on the square icon on the sidebar or pressing Ctrl+Shift+X. Search for "Java Extension Pack" by Microsoft and install it. This pack includes essential Java extensions like Language Support, Debugging, Testing, and more.

Configure Java in VS Code:

- VS Code should automatically detect the JDK you installed. If not, you can set the `java.home` setting in VS Code to point to your JDK location.

---

### Installing Kotlin

- macOS: `brew install kotlin`
- Linux:
  - Arch: `sudo pacman -S kotlin`
  - Ubuntu/Debian: `sudo snap install --classic kotlin`
- Windows: Download [Kotlin Compiler](https://github.com/JetBrains/kotlin/releases/tag/v1.9.0) and add it to the PATH.

Install Kotlin Language Extension:

For VS Code you can install the Kotlin Language Extension like this:

- Go to Extensions (you can use the shortcut Ctrl+Shift+X).
- Search for "Kotlin" and install the "Kotlin Language" extension by FWCD.

Install Java Development Kit (JDK):

- Kotlin runs on the JVM, so you'll need the [Java Development Kit - JDK](#installing-java) installed.

---

### Installing Scala

**macOS:**

```bash
brew install scala sbt
```

**Linux:**

Ubuntu/Debian:

```bash
sudo apt-get install scala sbt
```

**Windows:**

You can download and install from the official websites: [Scala](https://www.scala-lang.org/download/) & [SBT](https://www.scala-sbt.org/download.html).

Install the Scala Language Extension for VS Code:

- Open VS Code.
- Navigate to Extensions (shortcut: Ctrl+Shift+X).
- Search for "Scala" and install the "Scala (Metals)" extension, which is the official Scala language server.

---

### Installing Groovy

Install Java:

- Groovy runs on the JVM, so you'll need [Java](#installing-java) installed.

Install Groovy:

- On Windows: You can use the [Groovy Windows Installer](https://groovy.apache.org/download.html) to install Groovy easily.
- On macOS: You can use Homebrew to install Groovy. Open your terminal and run `brew install groovy`.
- On Linux: You can use a your distribution's package manager to install Groovy. For example, on Ubuntu/Debian, you can run `sudo apt-get install groovy` and on Arch Linux `sudo pacman -S groovy`.

---

### Installing Python

#### Windows:

- Visit the official Python website's [download page](https://www.python.org/downloads/).
- Click on the latest Python release.
- Scroll down to the Files section and download the Windows x86-64 executable installer for 64-bit version of Windows.
- Run the installer file and follow the instructions, making sure to tick the box that says "Add Python to PATH" before clicking Install Now.

#### Mac OS:

Mac OS X should come pre-installed with Python, but in case it's not installed, here's how to install it:

- Visit the official Python website's [download page](https://www.python.org/downloads/).
- Click on the latest Python release.
- Download the macOS 64-bit installer.
- Open the downloaded .pkg file and follow the instructions to install Python.

#### Linux:

Most Linux distributions come with Python pre-installed. To check if you have Python installed, open a terminal and type `python3 --version`.

If you need to install or upgrade Python, you can do so with the package manager for your Linux distribution. For Ubuntu, you can use the following commands:

```bash
sudo apt update
sudo apt install python3
```

---

### Installing Flask

You should have already installed [Python](#installing-python) before installing Flask. If you haven't, please do so first. You can check if you have Python installed by opening a terminal and typing `python3 --version`.
In most operating systems, after you have Python installed, you can install Flask with the command:

```bash
pip install Flask
```

In Arch Linux you can run:

```bash
sudo pacman -S python-flask
```

---

### Installing Django

- Install [Python](#installing-python) if you haven't already.
- Install Django:
  - With pip: `pip install django`
  - In Arch Linux you can use: `sudo pacman -S python-django`

---

### Installing Solidity (Truffle Ethereum Development Environment)

Before you can start writing Solidity code, you need to install [Node.js and NPM](#installing-nodejs-and-npm).
After installing Node.js and NPM, you can install the Truffle development environment for Ethereum with this command:

```bash
npm install -g truffle
```

If you are using VS Code, you can install the "Solidity" extension by Juan Blanco from the VS Code Marketplace.

---

### Installing Vyper

It is highly recommended to use a Python virtual environment. If you don't have virtualenv installed, you can install it using pip:

```bash
pip install virtualenv
```

Create a new virtual environment:

```bash
virtualenv vyper-env
```

Activate the virtual environment:

_On macOS and Linux:_

```bash
source vyper-env/bin/activate
```

_On Windows:_

```bash
.\vyper-env\Scripts\activate
```

Install Vyper within the virtual environment:

```bash
pip install vyper
```

---

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

---

### Installing Rails

Install [Ruby](#installing-ruby) if you haven't already.

MacOS:

- Install Homebrew if you haven't already: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- Install Ruby: `brew install ruby`
- Install Rails: `gem install rails`

On Windows:

- Download RubyInstaller from [here](https://rubyinstaller.org/).
- Follow the installation steps.
- Open command prompt and run `gem install rails`.

On Linux:

- Install RVM (Ruby Version Manager): `\curl -sSL https://get.rvm.io | bash -s stable --ruby`
- Install Ruby: `rvm install ruby`
- Install Rails: `gem install rails`

---

### Installing Elixir

Install the ElixirLS extension for VS Code:
Launch VS Code, head to Extensions (or press Ctrl+Shift+X), and search for ElixirLS. This extension provides Elixir language support and debugger.

Install Elixir:

- Windows: The easiest way to install Elixir on Windows is by using Windows Subsystem for Linux (WSL).
- Linux: You can typically install Elixir through your distribution's package manager. For example, on Ubuntu/Debian:

```bash
sudo apt-get install elixir
```

- Mac: You can use Homebrew:

```bash
brew install elixir
```

---

### Installing Crystal

Linux (Ubuntu): `sudo apt install crystal`
Linux (Arch): `sudo pacman -S crystal`
macOS: `brew install crystal`
Windows: [Official Installation Guide](https://crystal-lang.org/install/)

VS Code Extension:

- Install the Crystal Language extension by The Crystal Programming Language for syntax highlighting, code completion, and more.

---

### Installing PHP

Windows:

- Download the PHP ZIP package from https://windows.php.net/download.
- Extract the ZIP file and rename the extracted directory to php.
- Move the php directory to C:\.
- Add C:\php to your system's PATH environment variable.

Mac OS:

PHP comes pre-installed on Mac OS X. To upgrade or install a different version, consider using Homebrew:

- Open Terminal and type `brew install php`.

Linux (Ubuntu/Debian):

- Open Terminal and type `sudo apt install php`.

---

### Installing Laravel

Install PHP:

- If you haven't already, you need to install [PHP](#installing-php) first to work with Laravel.

Install Laravel:

- Make sure you have [Composer](https://getcomposer.org/) installed. If not, download and install it from the [Official Composer website](https://getcomposer.org/).
- After installing Composer, open your terminal and run `composer global require laravel/installer` to install Laravel.
- You might need to add the composer's bin directory to your PATH environment variable. For example, on Windows, you would add `C:\Users\<username>\AppData\Roaming\Composer\vendor\bin` to your PATH and in Linux `export PATH=$PATH:~/.config/composer/vendor/bin` to your `.bashrc` file.

---

### Installing Golang

For macOS and Linux, you can use the terminal to install Go:

- On macOS, if you have Homebrew installed, type: `brew install go`.
- On Linux, the command will depend on your distro's package manager. For example, on Ubuntu or Debian, you would type: `sudo apt-get install golang`.
- On Windows, go to the official [Go downloads page](https://go.dev/dl/), and download the binary release suitable. Use the MSI installer and follow the prompts to install the Go tools. It is recommended to leave the default settings for when asked about installation directory or PATH variables.

To check your installation, open a terminal and type: `go version`. This should return the installed version of Go.

---

### Installing Dart

For macOS and Linux, you can use the terminal to install Dart:

- On macOS, if you have Homebrew installed, type: `brew install dart`.
- On Linux, the command will depend on your distro's package manager. For example, on Ubuntu or Debian, you would type: `sudo apt-get install dart`.

For Windows, go to the official [Dart SDK Install page](https://dart.dev/get-dart), and download the SDK suitable for your system. Use the Dart installer and follow the prompts to install the Dart SDK. It is recommended to leave the default settings for when asked about installation directory or PATH variables.

To check your installation, open a terminal and type: dart --version. This should return the installed version of Dart.

---

### Installing Flutter

Flutter installation includes several steps, so it's recommended to follow the official [Flutter installation guide](https://flutter.dev/docs/get-started/install).

Installing Flutter requires also installing Dart, which you can either install separately [here](#installing-dart), but it can also be installed with Android Studio or XCode. You can use VS Code as your IDE if you like, but it is recommended to still install [Android Studio](https://developer.android.com/studio) for Windows and Linux or [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) for MacOS, as they include the Android SDK and iOS SDK respectively.
However, you can also install Flutter without installing Android Studio or Xcode, but you'll need to install the Android SDK and iOS SDK separately.

Install Flutter and Dart Plugins in VS Code:

- Open VS Code and go to Extensions (Ctrl+Shift+X).
- Search for "Flutter" and install it.
- The Dart plugin will be automatically installed along with Flutter.

---

### Installing Swift

Install Swift:

- For macOS: Swift comes pre-installed. If not, you can download it from the [Swift website](https://swift.org/download/).
- For Linux: Follow the instructions on the [Swift website](https://swift.org/download/) for Linux installations.

VS Code Setup:

- Search for the "Swift" extension by Swift Server Work Group and install it. This extension provides support for Swift language, including features like autocomplete, linting, and debugging.

Additional Resources:

[Swift.org - Getting Started](https://swift.org/getting-started/)

---

### Installing React Native

Install React Native CLI:

```bash
npm install -g react-native-cli
```

Set up the Android development environment by following the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup?guide=native).

---

### Installing Julia

- Windows: Download the installer from the [Official Julia website](https://julialang.org/downloads/) and follow the instructions.
- macOS: Download the macOS installer from the [Official Julia website](https://julialang.org/downloads/) and follow the instructions.
- Linux: Use the appropriate package manager for your distribution. For example in Arch Linux you would use `sudo pacman -S julia`, or download the binaries from the [Official Julia website](https://julialang.org/downloads/).

Install the Julia extension for VS Code:

- Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
- Search for "Julia" and install the extension provided by the Julia Language team.

---

### Installing Rust

Windows:

- Go to rust-lang.org to download the "rustup-init.exe" installer.
- Run the installer and follow the on-screen instructions.
- Once installation is complete, open a new Command Prompt and verify with `rustc --version`.

Mac and Linux:

- Open a terminal.
- Run the following command:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

- Follow the on-screen instructions.
- Restart your terminal (or source the changes as instructed at the end of the installation) to ensure the cargo and rustc commands are available.
- You can verify the installation with `rustc --version`.

---

### Installing Haskell

Install Haskell Platform:

The Haskell Platform provides everything needed to get started with Haskell.

- Windows: You can download the Haskell Platform from [Haskell's official website](https://www.haskell.org/downloads/).
- Mac/Linux: You can install GHCup for Haskell by running `curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh` in your Terminal and following the instructions.

Install Haskell Extensions for VS Code:

- Open VS Code, go to the Extensions view by clicking on the square icon on the sidebar or pressing Ctrl+Shift+X. Search for "Haskell Syntax Highlighting" and install it. Also, consider installing "Haskell Language Server" for enhanced features such as type information, autocompletion, and more.

---

### Installing Lua

- macOS: `brew install lua`
- Ubuntu/Debian: `sudo apt-get install lua5.3`
- Arch Linux: `sudo pacman -S lua`
- Windows: Download and install from the official website: [Lua.org](https://www.lua.org/start.html)

---

### Installing Clojure

On macOS:

```bash
brew install clojure/tools/clojure
```

On Linux (using curl):

```bash
curl -O https://download.clojure.org/install/linux-install-1.10.3.967.sh
chmod +x linux-install-1.10.3.967.sh
sudo ./linux-install-1.10.3.967.sh
```

On Arch Linux:

```bash
sudo pacman -S clojure
```

On Windows:

- Download the Windows installer from the [Clojure Official Site](https://clojure.org/guides/getting_started).

Setting up Calva for VS Code:

- Install the Calva extension from the VS Code marketplace. Calva is a rich integrated development environment for Clojure, providing an interactive REPL, linting, and more.

Install Leiningen, a popular Clojure build tool:

On macOS:

```bash
brew install leiningen
```

On Arch Linux:

```bash
sudo pacman -S leiningen
```

---

### Installing OCaml

You can use the OPAM (OCaml Package Manager) to install the OCaml compiler and tools.

On macOS:

```bash
brew install opam
opam init
opam switch create 4.13.1
eval $(opam env)
```

On Linux (Ubuntu/Debian):

```bash
sudo apt-get install opam
opam init
opam switch create 4.13.1
eval $(opam env)
```

On Windows:

Installation is a bit more involved. Consider using [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) or refer to the official [OCaml for Windows](https://fdopen.github.io/opam-repository-mingw/installation/) instructions.

---

### Installing LaTeX

Depending on your operating system, you'll need a TeX distribution:

- Windows: [MikTeX](https://miktex.org/download) or [TeX Live](https://www.tug.org/texlive/acquire-netinstall.html)
- macOS: [MacTeX](https://www.tug.org/mactex/)
- Linux: TeX Live (`sudo apt-get install texlive` for Debian/Ubuntu distributions)

While you can use any text editor (like VS Code) to write LaTeX, specialized LaTeX editors make the process smoother. You can download for example [TeXstudio](https://www.texstudio.org/), [TeXmaker](https://www.xm1math.net/texmaker/), or [Overleaf](https://www.overleaf.com/).

---

### Installing Lisp

Install SBCL (Steel Bank Common Lisp):

Depending on your OS, you can follow the instructions on the [Official SBCL website](http://www.sbcl.org/platform-table.html) to install SBCL.

Install the Lisp Extension for VS Code:

- Open Visual Studio Code.
- Go to Extensions.
- Search for Lisp and install any Lisp extension you like. Usually the one that has the most downloads is the most safest.

Set Up Your Lisp Environment (Windows):

After installing the extension, you may need to set up your Lisp environment by pointing it to your SBCL installation. You need to adjust the configuration (settings.json) and set the lisp.sbcl.path to the path where SBCL is installed.

---

### Installing Fortran

#### Installing Fortran Compiler:

Depending on your OS, here's how you install the Fortran compiler:

**Windows:**

- Download and install the [MinGW-w64](https://www.mingw-w64.org/) compiler which includes Fortran.
- Add the bin directory of your MinGW-w64 installation to your PATH environment variable.

**Linux:**

Ubuntu/Debian:

```bash
sudo apt-get install gfortran
```

Arch Linux:

```bash
sudo pacman -S gcc-fortran
```

**macOS:**

If you have Homebrew:

```bash
brew install gcc
```

Setting up Visual Studio Code:

- Install Visual Studio Code.
- Open VS Code and go to the Extensions view by clicking on the square icon on the sidebar or pressing Ctrl+Shift+X.
- Search for and install the "Modern Fortran" extension for Fortran support.
- For better integration, you can also install the "Code Runner" extension which will allow you to run your Fortran code directly from VS Code.

---

### Installing Pascal

Windows:

- Download and install the Free Pascal compiler from [here](https://www.freepascal.org/download.html).
- Install the Pascal extension from the Visual Studio Code marketplace.
- Configure the path for the Free Pascal compiler in your settings if needed.

Linux:

- Install the Free Pascal compiler using your package manager, e.g., sudo apt install fp-compiler on Ubuntu.
- Install the Pascal extension from the Visual Studio Code marketplace.
- Configure the path for the Free Pascal compiler in your settings if needed.

macOS:

- Install Free Pascal via Homebrew with brew install fpc.
- Install the Pascal extension from the Visual Studio Code marketplace.
- Configure the path for the Free Pascal compiler in your settings if needed.

---

### Installing COBOL

Installing GnuCOBOL:

- For Windows: Download from [SourceForge](https://sourceforge.net/projects/gnucobol/).
- For Linux: Use the package manager, like `sudo apt install gnucobol` or equivalent for your distribution.
- For macOS: Use Homebrew with `brew install gnu-cobol`.

---

### Installing Erlang

**Windows:**

- Download the installer from the official Erlang website: [Erlang Downloads](https://www.erlang.org/downloads)
- Run the installer and follow the on-screen instructions.

**Linux:**
Ubuntu/Debian:

```bash
sudo apt-get install erlang
```

Arch Linux:

```bash
sudo pacman -S erlang
```

**macOS:**

Using Homebrew:

```bash
brew install erlang
```

Setting up VS Code extension:

- Search for erlang and install the Erlang extension provided by "Pierrick Gourlain".

---

### Installing Smalltalk

If you're using Linux, you can install GNU Smalltalk through your package manager. For example, on Ubuntu:

```bash
sudo apt-get install gnu-smalltalk
```

In Arch Linux you can download Smalltalk packages from AUR repositories. For example, you can use Yay:

```bash
yay -S smalltalk
```

For other OS installations, you can visit [GNU Smalltalk official website](https://www.gnu.org/software/smalltalk/).

---

### Installing Zig

**Windows and macOS:**

- Download the Zig compiler from the official Zig website: Zig Downloads
- Extract the downloaded package to a directory of your choice.
- Add the bin directory inside the extracted folder to your system's PATH.

**Linux:**

The command depends on your distribution.

For example, on Ubuntu/Debian, you can use:

```bash
sudo apt-get install zig
```

In Arch Linux:

```bash
sudo pacman -S zig
```

Setting up VS Code extension:

- Open the Extensions view (Ctrl+Shift+X).
- Search for zig and install the Zig Language extension provided by "ziglang".

---

### Installing R

Windows:

- Download R from [CRAN](https://cran.r-project.org/mirrors.html) and install it.
- Download [Rtools](https://cran.r-project.org/bin/windows/Rtools/) and install it.
- Add R and Rtools to your system PATH.

macOS:

- You can install R using [Homebrew](https://brew.sh/): `brew install R`.

Linux:

- Use your package manager to install R. For example, on Ubuntu: `sudo apt-get install r-base` and on Arch: `sudo pacman -S r`.

Setting up VS Code extension:

- Open the Extensions view (Ctrl+Shift+X).
- Search for `R` and install the R extension provided by "REditorSupport".

---

### Installing Nim

On Windows:

- Download the Nim installer from the [Official Nim website](https://nim-lang.org/install_windows.html) and follow the installation instructions.

On macOS:

- You can use Homebrew to install Nim. Open your terminal and run `brew install nim`.

On Linux:

- You can use a package manager like apt, dnf, or pacman to install Nim. For example, on Ubuntu/Debian-based systems, run `sudo apt-get install nim` or on Arch Linux `sudo pacman -S nim`.

---

### Installing MATLAB

Install MATLAB:

- Ensure you have MATLAB installed on your computer. You can download and install MATLAB from the official MathWorks website: [Download MATLAB](https://www.mathworks.com/login?uri=%2Fdownloads%2Fweb_downloads)

Install the MATLAB Extension for Visual Studio Code:

- Open Visual Studio Code and go to the Extensions view by clicking on the square icon in the sidebar on the left or using the shortcut Ctrl+Shift+X (Windows/Linux) or Cmd+Shift+X (macOS).
- Search for "MATLAB" in the Extensions view search bar. You should find an extension named "MATLAB" by MathWorks. Click the Install button to install it.

Configure the MATLAB Extension:

- Once the extension is installed, configure it to work with your MATLAB installation. You may need to specify the MATLAB executable path in the VS Code settings.

---

### Installing Octave

Install Octave:

- Download and install Octave for your operating system from the official [Octave website](https://www.octave.org/download.html).

Install the Octave extension for VS Code:

- Open VS Code, go to the Extensions view by clicking on the square icon in the sidebar or pressing Ctrl+Shift+X, and search for "Octave". Install the "Octave" extension provided by Juan Manuel Franco C.

---

### Installing sqlite3

#### macOS and Linux:

SQLite comes pre-installed on macOS and most Linux distributions. To verify if sqlite3 is installed, you can open a terminal and type:

```bash
sqlite3 --version
```

If SQLite is installed, this will output the version number.

#### Windows:

To install SQLite on Windows:

- Visit the SQLite download page.
- In the "Precompiled Binaries for Windows" section, download the `sqlite-tools-win32-x86-xxxxxx.zip` file.
- Unzip the downloaded file. It will create a directory named `sqlite-tools-win32-x86-xxxxxx`.
- Move the directory to `C:\` (or another location if you prefer) and rename it to `sqlite`.
- Add `C:\sqlite` to your PATH environment variable.

To check whether SQLite has been installed successfully, open Terminal window and run:

```bash
sqlite3 --version
```

This should output the version number if SQLite is installed correctly.

Note that the terminal in Visual Studio Code (VS Code) uses your system's PATH, so once you've added SQLite to your PATH as described above, you'll be able to use SQLite in the VS Code terminal.

---

### Installing TLA+ Toolbox

**The TLA Toolbox is an IDE (integrated development environment) for the TLA+ tools.**

Install the TLA+ Toolbox: This is the standard IDE for TLA+. You can download it from [here](https://lamport.azurewebsites.net/tla/toolbox.html).

Install the TLA+ extension for Visual Studio Code from the VS Code marketplace.

---

### Installing Bash

Ensure you have a UNIX-like environment. If you're on Linux or MacOS, you're already set. Windows users might want to look into [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) or use Git Bash, which you should already have in your machine if you have installed [Git](#installing-git).

---

### Installing Perl

- Windows: Use Strawberry Perl. Download the installer and follow the on-screen instructions.
- macOS: Perl comes pre-installed. You can check its version by typing perl -v in your terminal.
- Linux: Depending on your distribution, you can use your package manager. For example, on Debian-based systems, you can use `sudo apt-get install perl` and in Arch Linux `sudo pacman -S perl`.

Setting up VS Code for Perl:

- Search for the extension "Perl" in VS Code's extensions marketplace and install it for syntax highlighting and basic debugging support.

---

### Installing Mojo

#### macOS

- Install Brew by following this [guide](https://docs.brew.sh/Installation).
- Open a terminal and run the following commands:

```bash
brew update
brew upgrade modular
modular install mojo
```

#### Linux (Ubuntu/Debian)

To install Mojo on Linux (Ubuntu/Debian), you need to install Modular first. Follow these steps:

```bash
sudo apt update
sudo apt install modular
modular install mojo
```

---

### Installing ASM (Assembly)

#### Windows

Using NASM with Cygwin:

- Download the Cygwin installer from [Cygwin's website](https://cygwin.com/install.html).
- Run the installer and select the packages "nasm" and "gcc-core" for installation.
- Complete the installation process.

Now you can use the Cygwin terminal to assemble and run your Assembly programs.

#### Linux (Ubuntu/Debian)

Open the terminal and run the following command to install GNU Assembler (GAS):

```bash
sudo apt update
sudo apt install build-essential
```

To install NASM, run:

```bash
sudo apt install nasm
```

#### macOS

Install NASM using Homebrew:

```bash
brew install nasm
```

---

### Installing Docker

#### Windows

- Docker Desktop for Windows: You must have Hyper-V and Containers Windows features enabled.

  - Download the installer from [Docker Hub](https://docs.docker.com/desktop/install/windows-install/).
  - Run the installer and follow the instructions.
  - After installation, the Docker daemon should start automatically. You can manage it through the system tray.

- Docker Toolbox: For older systems that do not meet the Docker Desktop for Windows requirements.
  - Download the installer from [Docker Toolbox GitHub releases](https://github.com/docker-archive/toolbox/releases).
  - Run the installer and follow the instructions.

#### macOS

- Docker Desktop for Mac:
  - Download the installer from [Docker Hub](https://docs.docker.com/desktop/install/mac-install/).
  - Drag and drop the Docker app into the Applications folder.
  - Run the Docker app. Docker will prompt you for permissions to install its components. Allow it.

#### Linux (Ubuntu/Debian)

Update package index and install prerequisites:

```bash
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
```

Add Docker’s official GPG key:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Add Docker APT repository:

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

Update package index and install Docker:

```bash
sudo apt-get update
sudo apt-get install docker-ce
```

Start and enable Docker service:

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

After installation on any of these platforms, you can verify the installation by running `docker --version` in a terminal to see the installed Docker version.

Remember to consult the official documentation for the most up-to-date and detailed instructions:

- [Docker for Windows](https://docs.docker.com/desktop/install/windows-install/) installation guide
- [Docker for Mac](https://docs.docker.com/desktop/install/mac-install/) installation guide
- [Docker for Linux (Ubuntu/Debian)](https://docs.docker.com/engine/install/ubuntu/) installation guide

---

### Installing Kubernetes

- Install [Docker](https://docs.docker.com/get-docker/) if you haven't already.
- Install [kubectl](https://kubernetes.io/docs/tasks/tools/), the Kubernetes CLI tool.
- Install [Minikube](https://minikube.sigs.k8s.io/docs/start/) for local Kubernetes deployment.
