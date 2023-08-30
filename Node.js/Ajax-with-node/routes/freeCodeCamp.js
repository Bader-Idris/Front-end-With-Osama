const { Router } = require('express');
const freeCodeCamp = Router();

const {
  getTest,
  postTest
} = require('../controllers/freeCodeCamp')

freeCodeCamp.route('/').get(getTest).post(postTest)

module.exports = freeCodeCamp;

/*
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "msg": "hi mom",
  "create": "create database database_name;"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("localhost:5000/freecodecamp/v1/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/







/*
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'localhost',
  'port': 5000,
  'path': '/freecodecamp/v1/',
  'headers': {
    'Content-Type': 'application/json'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = JSON.stringify({
  "msg": "hi mom",
  "create": "create database database_name;"
});

req.write(postData);

req.end();
*/