const mysql = require('mysql'); 

const config = {
  host: "localhost",
  user: "root",
  password: "apmsetup",
  database: "bookShoping",
}

const conn = mysql.createPool(config)

class Database {
  query(sql, args) {
    return new Promise((resolve, reject) => {
      conn.query(sql, args, (err, rows) => {
        if (err) return reject(err)
        resolve(rows)
      });
    });
  }
}

Database.execute = function(callback) {
  const database = new Database()
  return callback(database).then(
    result => database.release().then(() => result),
    err => database.release().then(() => { throw err })
  )
}

module.exports = function(){
  return{
    db:function(){ return new Database() }
  }
}