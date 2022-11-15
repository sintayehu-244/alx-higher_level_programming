#!/usr/bin/node
// Write a script that writes a string to a file

const fs = require('fs');
const filepath = process.argv[2];
const contents = process.argv[3];

fs.writeFile(filepath, contents, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
