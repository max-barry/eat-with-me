import { https } from 'firebase-functions';

import setupGraphQLServer from './graphql/server';
import { onRestaurantLiked } from './firebase/firestore/functions';
import {
    onUserCreated as _onUserCreated,
    onUserDeleted as _onUserDeleted
} from './firebase/fireauth/functions';

const GraphQLServer = setupGraphQLServer();

export const api = https.onRequest(GraphQLServer);
// export const onUserCreated = _onUserCreated;
// export const onUserDeleted = _onUserDeleted;
// exports.onRestaurantLiked = onRestaurantLiked;

// service:max-barry-685:B5aSiMIYx8C-ZgbpGjEW2A
