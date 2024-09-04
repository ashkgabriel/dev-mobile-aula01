const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/pages/index.html");
});

app.get("/contato", function (req, res) {
  res.sendFile(__dirname + "/pages/contato.html");
});

app.get("/produto", function (req, res) {
  res.sendFile(__dirname + "/pages/produto.html");
});

app.listen(8080);
console.log("Running on http://localhost:8080");
