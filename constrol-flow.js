/////////////////////////
console.log('TRY IF-ELSE SWITCH FOR')

var x = 5;
if(isNaN(x)){
    console.log("Variable is Not a Number");
    switch(x){
        case "HALO":
            console.log("It says HALO");
            break;
        case "HOLA":
            console.log("It says HOLA")
            break;
        default:
            console.log("I dont understand");
    }
}
else if(x > 0){
    console.log("Number is POSITIVE");
    for(var i = 0; i<x;i++){
        console.log(i);
    }
}
else{
    console.log("Number is NEGATIVE");
}


/////////////////////////
console.log("TRY FOR-IN")
var fruits = {
    'banana-key' : 'Banana', 
    'mango-key' : 'Mango', 
    'melon-key': 'Melon'
};
for(i in fruits){
    console.log(i)
    console.log(fruits[i])
}

var fruits = ['Banana', 'Mango', 'Melon', 'Papaya', 'Water Melon', 'Grape'];

/////////////////////////
console.log('TRY WHILE')
var i = 0;
while(fruits[i] != 'Papaya'){
    console.log(fruits[i++])
}


/////////////////////////
console.log('TRY DO WHILE with RANDOM')
var i = 0;
do{
    console.log(fruits[i]);
    i = Math.floor(Math.random() * fruits.length ) % fruits.length;
} while(fruits[i] != 'Melon')