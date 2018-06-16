"use strict";

const http = require("http");
const dogs = require("./dognames");

http.createServer((request, response) => {
  response.writeHead(200, {
    "Content-type": "text/plain"
  });
  response.write(`You've just made a new friend! Meet ${dogs[Math.floor(Math.random()*dogs.length)]}!`);
  response.end();
}).listen(3000);

