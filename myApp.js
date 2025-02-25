let express = require('express');
let app = express();

const absolutePath = __dirname + "/views/index.html";
const str = "Hello Express"

console.log(absolutePath);

app.use("/public", express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.sendFile(absolutePath)
})


































 module.exports = app;
