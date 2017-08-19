const fs = require('fs')

console.log('Start reading a file...')

var lyricks = ['lirik-jarangoyang.txt', 'lirik-pupus.txt', 'lirik-bintangkecil.txt']

for(n in lyricks){

    ((i) => fs.readFile(lyricks[i], 'utf-8', function(err, content){
        if(err){
            console.log('Error happended during reading the file')
            return console.log(err)
        }
        //console.log(content)
        console.log("Finish " + lyricks[i])
    }))(n)
    
    console.log('Process ' + n)
}



console.log('End of the file')

