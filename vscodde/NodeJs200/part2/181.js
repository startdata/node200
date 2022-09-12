const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "comicbook",
  port: "3306",
});

connection.connect();

connection.query(
  "update books set genre = 'action'where number =2 and name = 'mygiant nerd';"
),
  (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  };

connection.query(
  "update books set genre = 'romance', writer = 'JI' where number =2" +
    "and name = 'name';",
  (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  }
);

connection.end();
