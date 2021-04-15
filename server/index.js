/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('WW is listening port 3000');
});

module.exports = app;
