const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Type <h1>{/about or /Hello}</h1>  in addressbar after address to go on new page!");
});
app.get("/about", (req, res) => {
  res.send("This page working through Express.js!");
});
app.get("/Hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
