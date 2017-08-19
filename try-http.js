const request = require('request');
 
request({
    url: 'https://developers.zomato.com/api/v2.1/categories', 
    json: true, 
    headers: {
        'user-key': 'b12dd973aaca5df421db736848818811'
    }},
    (err, res, body) => {
        if (err) { return console.log(err); }
        else if(res.statusCode == 200){
            //console.log(body.url);
            //console.log(body.explanation);
            console.log("Number of Categories : " + body.categories.length);
        }
        else{
            console.log(body.status)
        }
        
    }
);