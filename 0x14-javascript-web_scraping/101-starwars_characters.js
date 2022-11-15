#!/usr/bin/node
// A script that prints the number of movies where the character “Wedge Antilles” is present

const request = require('request');
const url = 'http://swapi.co/api/films/' + process.argv[2];

let filmChars = [];
const charNames = {};
request({ url: url, json: true }, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    filmChars = res.body.characters;
    for (const index of filmChars) {
      request(index, { json: true }, (err, res) => {
        if (err) {
          console.log(err);
        }
        getName(index, res.body.name);
      });
    }
  }
});

// function that prints the name of each characters
function getName (url, name) {
  charNames[url] = name;
  if (Object.entries(charNames).length === filmChars.length) {
    for (const idx of filmChars) {
      console.log(charNames[idx]);
    }
  }
}
