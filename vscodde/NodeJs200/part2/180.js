const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "comicbook",
  port: "3306",
});

connection.connect();

connection.query("select * from books", (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

connection.query(
  "select number, genre, writer, releasedate from books",
  (error, result, fields) => {
    if (error) throw error;
    console.log(results);
  }
);

connection.query(
  "select * from books where genre = 'action'",
  (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  }
);

connection.query(
  "select * from books where genre ='action' or genre= 'comedy'",
  (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  }
);

connection.query(
  "select * from books where releasedate LIKE '2017%'",
  (error, results, fields) => {
    if (erro) throw error;
    console.log(results);
  }
);

connection.end();
