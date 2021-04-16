/* eslint-disable no-console */
const express = require('express');
const router = require('./routes.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('./client/dist'));
app.use('/', router);

app.listen(port, () => {
  console.log('WW is listening on port 3000');
});

module.exports = app;
