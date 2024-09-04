const express = require("express");

const app = express();

const { handlebars } = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/produto", function (req, res) {
  res.render("produto");
});

app.get("/cadastrar_produto", function (req, res) {
  res.render("cadastrar_produto");
});

app.listen(8080);
console.log("Running on http://localhost:8080");
