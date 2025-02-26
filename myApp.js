let express = require('express');
let path = require('path');
let dotenv = require('dotenv').config()

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
    const msg = "Hello json"
    res.json({ "message" : process.env.MESSAGE_STYLE === "uppercase" ?
        msg.toUpperCase() :
        msg
     });
})

 module.exports = app;
