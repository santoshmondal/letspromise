/**
 * Created by santosh on 5/11/16.
 */
var fs = require('fs');
var Promise = require('bluebird');

function readFile(fileToRead) {
    return new Promise(function(resolve, reject){
        fs.readFile(fileToRead, function(err, data){
            if(err) {
                return reject("Error while reading file.");
            }

            return resolve(data.toString());
        });
    });
};


var bpromise = Promise.join(readFile('./sample/file1.txt'), readFile('./sample/file2.txt'), readFile('./sample/file3.txt'));
bpromise.then(function(result){
    console.log("<====FILE-1=====>");
    console.log(result[0]);
    console.log("<====FILE-2=====>");
    console.log(result[1]);
    console.log("<====FILE-3=====>");
    console.log(result[2]);

}).catch(function(err){
    console.log("Handle Error :: " + err);
});
