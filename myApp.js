let express = require('express');
let path = require('path');
let dotenv = require('dotenv').config()

let app = express();

const absolutePath = __dirname + "/views/index.html";
const str = "Hello Express"

console.log(absolutePath);
console.log(path.join(__dirname, 'public'))

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    const { method, path, ip } = req;
    console.log(`${method} ${path} - ${ip}`);
    next();
})

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

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send({ time: req.time })
})

 module.exports = app;
