var express = require('express');
var app = express();

var progressive = ['Hillary Clinton', 'Bernie Sanders', 'Martin O\'Malley', 'Elizabeth Warren', 'Jill Stein', 'Lucy Flores', 'Winona LaDuke', 'Al Franken'];
var conservative = ['Donald Drumpf', 'Ted Cruz', 'John Kasich', 'Jeb Bush', 'Carly Fiorina', 'Rick Santorum', 'Marco Rubio', 'Gary Johnson'];
var allCandidates = progressive.concat(conservative);
// console.log(allCandidates);


app.get('/', function(request, response){
  response.sendFile(__dirname + '/public/index.html');
  // response.send(allCandidates);
});

app.get('/progressive', function(request, response){
  response.send(progressive);
});

app.get('/conservative', function(request, response){
  response.send(conservative);
});

app.get('/allCandidates', function(request, response){
  response.send(allCandidates);
});

app.use(express.static('public'));

var server = app.listen(3000, function(){
  var port = server.address();
  console.log('Listening on port: ', port);
});
