
var express = require('express');

var app = express.createServer(express.logger());

var txt = new Buffer(fs.readfilesync(index.html),"utf-8") 

app.get('/', function(request, response) {
  response.send(fs.readfilesync(index.html));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
