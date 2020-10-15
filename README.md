## A very simple force graph

This README expects a basic understanding of the command line and will work on Windows, macOS and Linux.

### Get started

To run the project you'll need to install nodeJS which supplies the `npm` package management tool we'll use below to install
the libraries we need to run the project.

For installation instructions please visit [https://nodejs.org/en/](https://nodejs.org/en/)

Once you have npm installed you can

In the project directory, you can run:

```
npm install
```

This command might take a little while to run but once it has completed it will have created a `node_modules` folder which contains
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

### Learn React

The [React documentation](https://reactjs.org/docs/getting-started.html) contains everything you need to get started with React.

### Credit

This app was built with the help of https://dev.to/gilfink/creating-a-force-graph-using-react-and-d3-76c