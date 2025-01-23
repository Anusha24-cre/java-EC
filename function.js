//function statement
function b() {
    console.log('hi');
}       
b();



//function expression
var a= function() {
    console.log('Hi Tony');
}

a();



//function declaration  are hoisted

b();
function b() {
    console.log('hi');
}


//ananymous function 

function s() {
    console.log('hi');
}
// a function without a name is anaonymous function


//named function expression
 function a() {
    console.log('hi');  
}
//a function with a name is named function expression


 //parameters and arguments
    function sayHello(name) {
        console.log('Hello '+ name);
    }   
    sayHello('Tony');

    //output: Hello Tony


//default parameters
    function sayHello(name='Tony') {
        console.log('Hello '+ name);
    }
    sayHello();

    //output: Hello Tony




//callback fucntion

function x(){

}
x( function y(){

});

//first class functions

var a = function (){
    return function xyz(){

    }
}
a();

//ability to use functions as values,pass argument from another function,return from another function
//first class citizen:ability to used like values