
var myMakeItModular = require('./myMakeItModular');
var callback = function(error, files){
	if(error)console.log(error);
	else{
		files.forEach(function(file){
			console.log(file);
		});

	}
}
myMakeItModular(process.argv[2],process.argv[3],callback);