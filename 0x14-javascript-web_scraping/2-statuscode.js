#!/usr/bin/node
// Write a script that display the status code of a GET request

const request = require('request');
const url = process.argv[2];

request(url, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log('code: ' + res.statusCode);
  }
});
