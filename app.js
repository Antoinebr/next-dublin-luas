
var express = require('express');
var cors = require('cors');
var app = express();

const PORT = process.env.PORT || 8000;


let myLuas = require('./myLuas.js');

let station = 'tpt';

app.use(cors());

app.get('/nextLuas', function (req, res, next) {

    myLuas.getNextLuas(station).then( next =>  res.json(next) );


})

app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT} `);
})




