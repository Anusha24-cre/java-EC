var x = 10;
console.log(x);
// 10


var n = 10;
function square(n) {
    var value = n * n;
    return value;
}
console.log(square(n)); 
// 100


//Hoisting in JavaScript

console.log(x);
var x = 10;


//Global space

var x = 10;

function test() {
    var y = 20;
    console.log(x);
    console.log(y);
}
test()

// 10
// 20





let  x;
 console.log(x);

//  undefined


console.log(x);
// ReferenceError: x is not defined



//scope chain and lexical scoping in JavaScript

function a() {
    var x = 10;
    function test() {
        var y = 20;
        console.log(x);
        console.log(y);
    }
    }
    test();
    a();    


// 10
// 20


//let and const in JavaScript

var x = 10;
 console.log(window.x);
// 10

let y = 10;
 console.log(this.y);
// undefined


//setTimeout in JavaScript


function x() {
    var i = 1;
    setTimeout(function (){
        console.log(i);
    },3000)
}
x ();
// 1    // 1 will be printed after 3 seconds



function x(){
    for(let i=1; i<=5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    }
}

x();

// 1
// 2
// 3
// 4
// 5


//Closures in JavaScript


function x(){
    for(var i=1; i<=6; i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, i*1000);
        }
}
close(i);
}

x();

// 1
// 2
// 3
// 4
// 5
// 6



























