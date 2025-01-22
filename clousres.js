function x(){
    var a = 1;
    function y(){
        console.log(a);
    }
    y();
}

x();

// 1
//clousers are like functions along with lexical environment

function x(){
    var a = 1;
    function y(){
        console.log(a);
    }
    return y;
}
var b= x();
console.log(b);

b();

//1


//uses of clousres 

curring
memorise
iterators
setTimeout


//setTimeout clousres

function x(){
    for (var i=1; i<=5; i++);
    function close(i){
        setTimeout(function(){
            console.log(i);

        },i*3000);
    }
    close(i)
};

//1



