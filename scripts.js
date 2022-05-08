window.onload = function(){
    setTimeout(typeWriter, 500);
};

var i = 0;
var title = 'Hello, world';
var speed = 100;

function typeWriter(){

    if (i < title.length) {
        document.getElementById("t1").innerHTML += title.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}