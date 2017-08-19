// var sum = function(a, b){
//     return a + b;
// }

// var p = 5, q = 6;
// var r = sum(p, q);
// console.log(r);


// POW
function plus3(x, index){
    if(index % 2 == 0){
        return x + 3;
    }
    else{
        return (x + 3) * -1;
    }
}
var numbers = [1, 2, 3, 4, 5]
//var result = numbers.map( plus3 );
var result = numbers.map( (x, index) => (x + 3) * (index % 2 == 0 ? 1 : -1));
console.log(result);

// // SQUARE
