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


var bpromise = readFile('./sample/file1.txt');
bpromise.then(function(data){
    console.log(data);

    return readFile('./sample/file2.txt');
}).then(function (data) {
    console.log(data);

    return readFile('./sample/file3.txt')
}).then(function(data){
    console.log(data);

}).catch(function(err){
    console.log(err);
});

