const express = require("express");
const sslRedirect = require("heroku-ssl-redirect");
const path = require("path");
const app = express();
const port = process.env.PORT || 80;

app.use(express.static("public"));
app.use(sslRedirect());

app.get("/", (req, res) => {
    res.send("index");
});

app.listen(port, function() {
    console.log("Server has started listening on port:" + Number(port));
});