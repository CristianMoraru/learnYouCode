var http = require('http');
var fs = require('fs');
var bl = require('bl');
var server = http.createServer(function(req, res) {
	
	var ficheros = fs.createReadStream(process.argv[3]);
	ficheros.pipe(res);
});
server.listen(process.argv[2], function(){
	console.log("Escuchando en el puerto: ", process.argv[2]);
});