#!/usr/bin/node
// A script that prints the title of a Star Wars movie where the episode number matches a given integer

const request = require('request');
const url = 'http://swapi.co/api/films/' + process.argv[2];

request({ url: url, json: true }, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.body.title);
  }
});
