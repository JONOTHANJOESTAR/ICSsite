function welcomeUser(){

	var name = prompt("Enter your name:");
	alert("Welcome! "+ name);

}

function WhatIsBigger(){
  var number1 = parseInt(prompt("Pick a number"));
  var number2 = parseInt(prompt("Pick another number"));
   if(number1>number2){ 
     alert(number1 + "is larger");
     console.log(number1 + "is larger");     
   }
   else if(number2>number1){
     alert(number2 + "is larger");
     console.log(number2 + "is larger");     
   } 
   else{
   	alert("ERROR")
   }
}



function Loops(){
	var guess = prompt("Im thinking of a number from 0 to 100!(Press q to quit)");
	var numberValue = Math.floor(Math.random() * 101);
	var Quit = "q";
	while (true){
		if (guess == numberValue){
	 		alert("Eyyyy you got it!!");
	 		break;
	 	}
	 	else if (guess>numberValue){
	 		alert("Lower!");
			var guess = prompt("Im thinking of a number from 0 to 100!(Press q to quit)");
	 	}
	 	else if (guess<numberValue){
	 		alert("Higher!");
	 		var guess = prompt("Im thinking of a number from 0 to 100!(Press q to quit)");
	 	}
	 	else if (guess == Quit ) {
	 		break
	 	}

	 	else{
	 		alert("Bad input")
	 		var guess = prompt("Im thinking of a number from 0 to 100!(Press q to quit)");
	 	}

	}
}
