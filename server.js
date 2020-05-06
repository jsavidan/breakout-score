var express = require('express');
var app = express();

app.get('/best', function (req, res) {
  res.json({"player":"JSA","score":"550"});
});

app.listen(3001, function () {
  console.log('Breakout Score service listening on port 3001!');
});
