document.addEventListener("keypress",makeSound);
var crashcymbal=new Audio("sounds/crashcymbal.mp3");
var floortom=new Audio("sounds/floortom.mp3");
var tomtom=new Audio("sounds/tomtom.wav");
var midtom=new Audio("sounds/midtom.mp3");
var snare=new Audio("sounds/snare.wav");
var hihat=new Audio("sounds/hihat.mp3");
var bassdrum=new Audio("sounds/bassdrum.mp3");

var buttonList=document.querySelectorAll("button");
for(var item of buttonList){
item.addEventListener("click",function(){
switch(this.innerHTML){
case "W":
if(!crashcymbal.paused){
	crashcymbal.pause();
	crashcymbal.currentTime=0;
}

crashcymbal.play();
break;
case "A":
if(!floortom.paused){
	floortom.pause();
	floortom.currentTime=0;
}

floortom.play();
break;
case "S":
if(!tomtom.paused){
	tomtom.pause();
	tomtom.currentTime=0;
}

tomtom.play();
break;
case "J":
if(!midtom.paused){
	midtom.pause();
	midtom.currentTime=0;
}

	midtom.play();
break;
case "K":
if(!snare.paused){
	snare.pause();
	snare.currentTime=0;
}

	snare.play();
break;
case "L":
if(!hihat.paused){
	hihat.pause();
	hihat.currentTime=0;
}

hihat.play();
break;
case "D":
if(!bassdrum.paused){
	bassdrum.pause();
	bassdrum.currentTime=0;
}

bassdrum.play();
break;
default:
// alert("Invalid");
}
});
}
function makeSound(event){
var x=event.key;
switch(x){
case "w":
if(!crashcymbal.paused){
	crashcymbal.pause();
	crashcymbal.currentTime=0;
}

crashcymbal.play();
break;
case "a":
if(!floortom.paused){
	floortom.pause();
	floortom.currentTime=0;
}

floortom.play();
break;
case "s":
if(!tomtom.paused){
	tomtom.pause();
	tomtom.currentTime=0;
}

tomtom.play();
break;
case "j":
if(!midtom.paused){
	midtom.pause();
	midtom.currentTime=0;
}
	midtom.play();
break;
case "k":
if(!snare.paused){
	snare.pause();
	snare.currentTime=0;
}
	snare.play();
break;
case "l":
if(!hihat.paused){
	hihat.pause();
	hihat.currentTime=0;
}

hihat.play();
break;
case "d":
if(!bassdrum.paused){
	bassdrum.pause();
	bassdrum.currentTime=0;
}

bassdrum.play();
break;
default:
// alert("Invalid");
}
}