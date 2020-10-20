
document.addEventListener("keypress",makeSound);

var buttonList=document.querySelectorAll("button");
for(var item of buttonList){
	item.addEventListener("click",function(){
		switch(this.innerHTML){

		case "W":
			var audio=new Audio("sounds/crashcymbal.mp3");
			audio.play();
			break;
		case "A":
			var audio=new Audio("sounds/floortom.mp3");
			audio.play();
			break;
		case "S":
			var audio=new Audio("sounds/tomtom.wav");
			audio.play();
			break;
		case "J":
			var audio=new Audio("sounds/midtom.mp3");
			audio.play();
			break;
		case "K":
			var audio=new Audio("sounds/snare.wav");
			audio.play();
			break;
		case "L":
			var audio=new Audio("sounds/hihat.mp3");
			audio.play();
			break;
		case "D":
			var audio=new Audio("sounds/bassdrum.mp3");
			audio.play();
			break;
		default:
			alert("Invalid");

	}
	});
}

function makeSound(event){

	var x=event.key;
	switch(x){

		case "w":
			var audio=new Audio("sounds/crashcymbal.mp3");
			audio.play();
			break;
		case "a":
			var audio=new Audio("sounds/floortom.mp3");
			audio.play();
			break;
		case "s":
			var audio=new Audio("sounds/tomtom.wav");
			audio.play();
			break;
		case "j":
			var audio=new Audio("sounds/midtom.mp3");
			audio.play();
			break;
		case "k":
			var audio=new Audio("sounds/snare.wav");
			audio.play();
			break;
		case "l":
			var audio=new Audio("sounds/hihat.mp3");
			audio.play();
			break;
		case "d":
			var audio=new Audio("sounds/bassdrum.mp3");
			audio.play();
			break;
		default:
			alert("Invalid");

	}
}