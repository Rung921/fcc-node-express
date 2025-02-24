let express = require('express');
let app = express();

const str = "Hello Express";

console.log(str);


app.get('/', (req, res) => {
    res.send(str)
})
































 module.exports = app;
