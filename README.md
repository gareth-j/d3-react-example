## A very simple force graph
![Node.js CI](https://github.com/gareth-j/d3-react-example/workflows/Node.js%20CI/badge.svg) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

This repo contains a simple force graph simulation created using the d3 force library. Hopefully it can help in the understanding of how to create a basic force graph and serve as a base for a more complicated force graph app.

The app was created using `react-create-app`, contains a single very simple test to show use of [react testing library](https://testing-library.com/docs/react-testing-library/intro) and is built, tested and deployed to GitHub pages using [GitHub actions](https://github.com/gareth-j/d3-react-example/actions).

To see a live version of the app visit [https://gareth-j.github.io/d3-react-example/](https://gareth-j.github.io/d3-react-example/).

### Get started

This README expects a basic understanding of the command line but should work on Windows, macOS and Linux.

To run the project you'll need to install nodeJS which supplies the `npm` package management tool we'll use below to install
the libraries we need to run the project. For installation instructions see [https://nodejs.org/en/](https://nodejs.org/en/). 

Once you have npm installed run

```
npm install
```

This command might take a short while to run but once it has completed it will have created a `node_modules` folder which contains
all the JS libraries we need to run the project.

### Run

To run the project type

```
npm start
```

This will run the app in development mode and open the app in your browser at [http://localhost:3000](http://localhost:3000)

If you make any changes to the code the app will automatically reload and display the changes you've made. If you make changes that break the code
you'll see errors in the terminal and/or in the web browser.

### Tests

It's important that you test any software you write. In this package we use the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) which makes writing tests for React apps easy.

To run the tests type

```
npm test
```

This will run the tests in an interactive mode. Once the tests have run you can press `q` to exit the test session.

### Edit

The data to create the force graph is stored in [src/data/data.json](src/data/data.json). To add a new node create a new record in the `nodes` array with a unique id and name. To link this new node to others create a new record in the `links` array with the `source` value being the id of the node at one end of the link/edge and the target being the id of the node at the other end.

### GitHub actions

This project uses GitHub actions to build, test and deploy the code each time we push changes to the `main` branch. This is a good way to ensure that the code we commit is correct and automates work like deploying a new version of the app GitHub pages. Actions are configured using configuration files written in YAML that are located in `.github/workflows/`. See the [the documentation for more details](https://docs.github.com/en/free-pro-team@latest/actions).

### Learn React

The [React documentation](https://reactjs.org/docs/getting-started.html) contains everything you need to get started with React.

### Credit

This app was built with the help of https://dev.to/gilfink/creating-a-force-graph-using-react-and-d3-76c
