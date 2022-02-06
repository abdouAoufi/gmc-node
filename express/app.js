const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.listen(3000);
app.use(bodyParser.json());

app.get("/", (request, response, next) => {
    fs.readFile("./front-end/index.html", "utf-8", (err, data) => {
        response.send(data);
    });
});

app.get("/about", (req, res, next) => {
    fs.readFile("./about.html", "utf-8", (err, data) => {
        res.send(data);
    });
});

app.post("/create-profile", (req, res, next) => {
    const body = req.body;
    const content = `
    this user has a name  ${body.name} and email ${body.email}
    `;
    fs.writeFileSync(`./database/${body.name}.txt`, content, "utf-8");
});

app.use("*", (req, res, next) => {
    res.send("<h1> 404 not found</h1>");
});