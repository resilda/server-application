const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json);

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Server',
});

mysqlConnection.connect((error) => {
  if (!error) {
    console.log('DB connection succeded');
  } else {
    console.log('DB connection failed \n Error: ' + JSON.stringify(error, undefined, 2));
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get(`/employees`, (res, req) => {
  mysqlConnection.query('SELECT * FROM employee', (error, rows, fields) => {
    if (!error) {
      console.log(rows);
    } else {
      console.log(error);
    }
  });
});
