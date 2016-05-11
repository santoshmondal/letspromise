/**
 * Created by santosh on 5/11/16.
 */
var fs = require('fs');

function readFile(fileToRead) {
    fs.readFile(fileToRead, function(err, data){
        if(err) {
            conosole.log(err);
        }

        console.log(data.toString());
    });
};


readFile('./sample/file1.txt');
readFile('./sample/file2.txt');
readFile('./sample/file3.txt');