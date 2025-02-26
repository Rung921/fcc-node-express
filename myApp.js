let express = require('express');
const path = require('path');
let app = express();

const absolutePath = __dirname + "/views/index.html";
const str = "Hello Express"

console.log(absolutePath);
console.log(path.join(__dirname, 'public'))

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(absolutePath)
})

app.get('/json', (req, res) => {
    res.json({ "message" : "Hello json" })
})

 module.exports = app;
