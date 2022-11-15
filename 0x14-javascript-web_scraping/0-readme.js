#!/usr/bin/node
// Write a script that reads and prints the content of a file

const fs = require('fs');
const filepath = process.argv[2];

fs.readFile(filepath, 'utf-8', (err, contents) => {
  if (err) {
    console.log(err);
  } else {
    console.log(contents);
  }
});
