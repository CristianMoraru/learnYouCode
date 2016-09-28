var fs = require('fs');
fs.readFile(process.argv[2],
	function callback (error, data) { 
		if (error) {
			console.log(error);
			}else{
			var string = data.toString();
			var arrayLinea = string.split('\n');
			console.log(arrayLinea.length - 1);
		}
		/* ... */ 

	});
