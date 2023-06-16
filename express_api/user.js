const express = require('express');
const conn = require('./db')().db();
const app = express();

app.post ('/signup', (req, res) => {
  const {email, name} = req.body;

  conn.query(`select * from people where email='${email}'`, (err, result) => {

    if (result[0] == null) {
      conn.query(`insert into people(name, email) values('${name}', '${email}')`, (err, result) => {
        res.status(202).json({msg : 'signup'})
      })
    } else {
      res.status(201).json({msg : 'login'})
    }
  })
})

module.exports = app