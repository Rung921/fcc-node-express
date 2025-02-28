let express = require('express');
let path = require('path');
let dotenv = require('dotenv').config();
let bodyParser = require('body-parser');

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
    res.json({ time: req.time })
})

app.get('/:word/echo', (req, res) => {
    const { word } = req.params;
    res.json({ "echo" : word });
})

// app.get('/name', (req, res) => {
//     const { first, last } = req.query;
//     res.json({ name: `${first} ${last}`})
// })

app.use('/', bodyParser.urlencoded({extended: false}));

app.post('/name', (req, res) => {
    const { first, last } = req.body;
    res.json({ name: `${first} ${last}`})
})


 module.exports = app;
