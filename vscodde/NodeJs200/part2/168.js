const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/set", (req, res) => {
  console.log("Set Cookie 호출");
  res.cookie("user", {
    id: "0070",
    name: "brian",
    authorized: true,
  });
  res.redirect("/get");
});

app.get("/get", (req, res) => {
  console.log("Get Cookie 호출");
  res.send(req.cookies);
});

app.listen(3000, () => {
  console.log(`Server is running`);
});
