const express = require('express');
const app = express();
const quotes = require('./quotes.js');
const ports = process.env.PORT || 3000;

let quote;
let previousQuote;

app.all('*', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send(quotes);
});

app.get('/quote', (req, res) => {
  quote = [quotes[Math.floor(Math.random() * quotes.length)]];
  while (previousQuote == quote) {
    quote = quotes[Math.floor(Math.random() * quotes.length)];
  }
  previousQuote = quote;
  res.send(quote);
});

app.listen(ports, () => console.log(`listening on Port ${ports}`));
