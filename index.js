/*
var fs = require('fs');

fs.stat('./cat.jpg', function(err, stats) {
    console.log(stats);
});
*/
/*
var fs = require('fs');
var StatMode = require('stat-mode');

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});
*/
/*
var fs = require('fs');

fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log(data);
});
fs.writeFile('./text.txt', 'Tekst, który zapiszemy w pliku text.txt', function(err) {
    if (err) throw err; 
    console.log('Zapisano!');
});
*/
/*
var fs = require('fs');
var colors = require('colors');

fs.readFile('./text.txt', 'utf-8', function(err, data) {
	console.log('Dane przed zapisem'.blue);
  	console.log(data);
  	fs.appendFile('./text.txt', '\nA tak wyglądaja dane po zapisie', function(err) {
    	if (err) throw err;
    	console.log('Zapisano'.blue);
    	fs.readFile('./text.txt', 'utf-8', function(err, data) {
      		console.log('Dane po zapisie'.blue);
      		console.log(data);
    	});
  	});
});
*/

var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files) {
    console.log('Pliki przed zapisem'.blue)
    console.log(files);
    fs.writeFile('./files.txt', files, function(err) {
      	if (err) throw err;
		console.log('Zapisano'.blue);
		fs.readFile('./files.txt', 'utf-8', function(err, files) {
			console.log('Pliki po zapisie'.blue);
			console.log(files);
		});
	});
});



