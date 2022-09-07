![actions](https://github.com/dunnjacoba/selector/actions/workflows/actions.yaml/badge.svg?event=push)

# Selector

This app is meant to help settle the debate of what to eat?

# Getting Started with this App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This project is utilizing
[React-Bootstrap](https://react-bootstrap.github.io/) to minimalize design variations. Please keep inline styling to a minimum.

## Available Scripts

Before running any other scripts:

### `npm ci`

Makes a clean installation of all dependencies used in the application.
See [npm-ci](https://docs.npmjs.com/cli/v8/commands/npm-ci) for more information.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Contributions

Please add restaurant data from those local to you to the <code>src/components/restaurantData.js</code>

- For now this will be a static data source.
- The format for additions to the array is:

```
 {
 name: "{restaurant name}",
 image: "{restaurant logo URL}",
 site: "{restaurant website URL}"
 },
```
