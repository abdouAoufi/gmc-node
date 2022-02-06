const fs = require("fs");

function createHtmlFile(name) {
    let content = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>	
<h1> hello ${name} </h1>
</body>
</html>`;
    fs.writeFile(`${name}.html`, content, "utf-8", () =>
        console.log("file craeted")
    );
}

// createHtmlFile("Ahmed");

function readHtml(name) {
    fs.readFile(`${name}.html`, "utf8", (err, data) => {
        if (data) {
            console.log(data);
        } else {
            console.log(err);
        }
    });
}

readHtml("Adelpp");