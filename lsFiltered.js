var path;
path = require('path');
var fs = require('fs');
var ext = "." + process.argv[3];
fs.readdir(process.argv[2], function(error,files){
	files.forEach(function(file){
		
		if (path.extname(file) == ext) {
			console.log(file);
		}
	});
});

