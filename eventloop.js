console.log("Start");

setTimeout(function  cbT(){
    console.log("Callback");
},5000);

console.log("End");

//output
//Start
//End
//Callback


console.log("Start");

document.getElementById("btn").addEventListener("Click",function cbt(){
    console.log("Callback");
});

console.log("End");


//Start
//End
//Callback


console.log("Start");

setTimeout(function cbT(){
    console.log("CB setTimeout");
},5000);

fetch(`https://api.netflix.com`)
.then(function  cbF(){
    console.log("CB netflix");
},5000);

console.log("End");


//Start
//End
//Cb netflix
//Cb setTimeout


