## A very simple force graph

This README expects a basic understanding of the command line and will work on Windows, macOS and Linux.

### Get started

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

### GitHub actions

GitHub actions let us test code we write each time we commit and push code to our repo. This is a good way to ensure that the code you commit is correct. We configure actions using configuration files written in YAML that are located in `.github/workflows/`. See the [the documentation for more details](https://docs.github.com/en/free-pro-team@latest/actions).

### Try it out

See a live version of the app at [https://gareth-j.github.io/d3-react-example/](https://gareth-j.github.io/d3-react-example/)

### Edit

The data to create the force graph is stored in `src/data/data.json`. To add a new node create a new record in the `nodes` array with a unique id and name. To link this new node to others create a new record in the `links` array with the `source` value being the id of the node at one end of the link/edge and the target being the id of the node at the other end.

### Learn React

The [React documentation](https://reactjs.org/docs/getting-started.html) contains everything you need to get started with React.

### Credit

This app was built with the help of https://dev.to/gilfink/creating-a-force-graph-using-react-and-d3-76c
