var _ = require('lodash');
console.log(_);

var array =[1,2,3,4,5,6,7,8];
console.log("Answer:", _.without(array,3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rnd  = document.getElementsByClassName("btn")[0];

function setGradient()
{
    body.style.background = "linear-gradient(to right, " + color1.value + 
    ", " + color2.value + ")";

    css.textContent = body.style.background + ";" ;
}


function Randomcolor()
{
    var letters ="0123456789ABCDEF";
    var color ="#";
    for(var i=0; i<6;i++)
    {
        color+= letters[Math.floor(Math.random()*16)];
    
    }
    return color;
}

function colorsOut()
{
    color1.value = Randomcolor();
    color2.value = Randomcolor();
    setGradient();
}

document.addEventListener('DOMContentLoaded', setGradient);
rnd.addEventListener("click",colorsOut);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);