const fs = require('fs')
const async = require('async')

console.log('Start of file')

var files = [
    'lirik-jarangoyang.txt', 
    'lirik-pupus.txt', 
    'lirik-bintangkecil.txt']

async.parallel( 
    files.map((file) => {
        return (callback) => { fs.stat(file, () => {console.log("Finish " + file)})    }
    }),
    function(err, results){
    if(err){
        console.log('Error happended during reading the file')
        return console.log(err)
    }
    console.log("Finish")
});

console.log('End of the file')