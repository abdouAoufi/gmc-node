const person = require("./dep.js");
const fs = require("fs");

fs.writeFileSync("info.json", JSON.stringify(person), "utf-8");
let result = fs.readFileSync("./info.json", "utf-8");
result = JSON.parse(result);
const moreInfo = {
    notionality: "ALGERIAN",
};

result = {
    ...result,
    ...moreInfo,
};

fs.mkdirSync("dataaa")

fs.writeFileSync("./dataaa/infoWithNat.json", JSON.stringify(result), "utf-8");