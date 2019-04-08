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
	var guess = prompt("Im thinking of a number");
	var numberValue = 47;
	while (true){
	 if (guess == numberValue){
	 	alert("Eyyyyy you got it!!");
	 	break;
	 }
	 else if (guess>numberValue){
	 	alert("Lower!");
	 	var guess = prompt("Im thinking of a number");
	 }
	 else if (guess<numberValue){
	 	alert("Higher!");
	 	var guess = prompt("Im thinking of a number");
	 }
	}
}
