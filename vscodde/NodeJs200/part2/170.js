const express = require("express");
const parsurl = require("parseurl");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "keyboard dog",
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  if (!req.session.views) {
    req.session.views = {};
  }

  console.log(req.session);

  // get the URL
  const pathname = parsurl(req).pathname;

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

  next();
});

app.get("/puddle", (req, res) => {
  res.send(
    `Hello puddle! you viewd this page ${req.session.views["/puddle"]} times`
  );
});

app.get("/biggle", (req, res) => {
  res.send(
    `Hello biggle! you viewed this page${req.session.views["/biggle"]} times`
  );
});

app.listen(3000, () => {
  console.log(`server run`);
});
