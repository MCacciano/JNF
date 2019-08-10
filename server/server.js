const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./apollo/schema');
const connectDB = require('./mongo/db');

const app = express();

require('dotenv').config();

// connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
