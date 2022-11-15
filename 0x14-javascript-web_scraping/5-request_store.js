#!/usr/bin/node
// A script that gets the contents of a webpage and stores it in a file

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filepath = process.argv[3];

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(filepath, body, 'utf-8', (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
