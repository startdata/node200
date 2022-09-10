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
  "insert into books (genre, name, writer, releasedata) values ",
  (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  }
);

connection.end();
