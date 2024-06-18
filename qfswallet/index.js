const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const PORT = 4000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/public", express.static("public"));

app.get("/", function (req, res) {
  return res.render("index");
});

app.get("/a/terms", function (req, res) {
  return res.render("terms");
});

app.get("/a/wallets", function (req, res) {
  return res.render("app");
});

app.get("/a/success", function (req, res) {
  return res.render("success");
});

const server = http.createServer(app);

server.listen(
  {
    port: PORT,
  },
  () => console.log(`Web app is running on port ${PORT}`)
);
