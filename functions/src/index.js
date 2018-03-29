const functions = require('firebase-functions');

const setupGraphQLServer = require('./graphql/server');

const GraphQLServer = setupGraphQLServer();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.api = functions.https.onRequest(GraphQLServer);
exports.api = functions.https.onRequest((req, res) => res.send('cat2000'));

// service:max-barry-685:B5aSiMIYx8C-ZgbpGjEW2A