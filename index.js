const express = require('express');
const app = express();
const quotes = require('./quotes.js');
const ports = process.env.PORT || 3000;

let quote;
let previousQuote;

app.get('/quotes', (req, res) => {
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
