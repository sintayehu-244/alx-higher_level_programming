#!/usr/bin/node
// A script that prints the number of movies where the character “Wedge Antilles” is present

const request = require('request');
const url = 'http://swapi.co/api/films/' + process.argv[2];

let charNames = {};
request({ url: url, json: true }, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    const filmChars = res.body.characters;
    for (let i = 0; i < filmChars.length; i++) {
      request(filmChars[i], { json: true }, (err, res) => {
        if (err) {
          console.log(err);
        }
        charNames = res.body;
        console.log(charNames.name);
      });
    }
  }
});
