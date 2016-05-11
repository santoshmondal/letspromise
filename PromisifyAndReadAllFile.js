/**
 * Created by santosh on 5/11/16.
 */
var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);

var bpromise = fs.readFileAsync('./sample/file1.txt');
bpromise.then(function(data){
    console.log(data.toString());

    return fs.readFileAsync('./sample/file2.txt');
}).then(function (data) {
    console.log(data.toString());

    return fs.readFileAsync('./sample/file3.txt')
}).then(function(data){
    console.log(data.toString());

}).catch(function(err){
    console.log(err);
});

