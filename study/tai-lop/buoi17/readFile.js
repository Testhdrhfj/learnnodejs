var fs = require('fs');


fs.readFile('content2.txt',function(err,data){
    if (err) throw err;
    console.log(data.toString());
})