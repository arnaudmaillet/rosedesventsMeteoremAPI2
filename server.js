const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 6060;

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes.js'); // importation des routes
routes(app); // enregistrement des routes
