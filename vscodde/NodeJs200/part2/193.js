const mysql = require("mysql");
const express = require("express");
const fs = require("fs");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "comicbook",
  port: "3306",
});

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.listen(3000, () => {
  console.log(`server run`);
  connection.connect();
});

app.get("/", (req, res) => {
  fs.readFile("booklist.html", "utf-8", (err, data) => {
    connection.query("SELECT * FROM books", (err, results, fields) => {
      if (err) throw error;
      res.send(
        ejs.render(data, {
          data: results,
        })
      );
    });
  });
});

app.post("/create", (req, res) => {
  const body = req.body;
  connection.query(
    "INSERT INTO books (genre,name,writer, releasedate) VALIE (?,?,?,?)",
    [body.genre, body.name, body.writer, body, releasedate],
    () => {
      res.redirect("/");
    }
  );
});
