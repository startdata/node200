const express = require("express");

const app = express();

app.get("/one", (req, res) => {
  res.send('<a href="/two">street 200</a>');
});

app.get("/two", (req, res) => {
  res.send('<a href="/one">street 100</a>');
});

app.get("/three/:number", (req, res) => {
  const streetNumber = req.params.number;
  res.send(`${streetNumber}Street`);
});

app.get("/four/:number", (req, res) => {
  const aveNumber = req.params.number;
  res.send(`${aveNumber}AVe`);
});

app.listen(3000, () => {
  console.log(`server`);
});
