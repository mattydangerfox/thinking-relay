# Thiking relay
This is just simple practice based on todo-modern.

## Installation

```
npm install
```

## Running

Set up generated files:

```
npm run update-schema
npm run build
```

Start a local server:

```
npm start
```

## Developing

Any changes you make to files in the `js/` directory will cause the server to
automatically rebuild the app and refresh your browser.

If at any time you make changes to `data/schema.js`, stop the server,
regenerate `data/schema.graphql`, and restart the server:

```
npm run update-schema
npm run build
npm start
```
