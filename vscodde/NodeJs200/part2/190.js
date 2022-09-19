const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "comicbook",
  port: "3306",
});

connection.connect();

connection.query("SELECT * from books", (err, results, fields) => {
  if (err) throw error;
  console.log(results);
});

connection.end();
