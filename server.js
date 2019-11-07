var express = require('express');
var path = require('path');
var app = express();
app.use(express.json());
var bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var htmlRoutes = require('./app/routing/htmlRoutes.js')
var apiRoutes = require('./app/routing/apiRoutes.js')
var PORT = 3000;
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
htmlRoutes(app);
apiRoutes(app);

