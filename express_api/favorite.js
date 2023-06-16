const express = require('express');
const conn = require('./db')().db();
const app = express();

app.get('/', (req, res) => {
  console.log('favorite api in');

  conn.query('select * from favorite', (err, result) => {
    console.log(result)

    res.status(200).json(result);
  })
});

module.exports = app