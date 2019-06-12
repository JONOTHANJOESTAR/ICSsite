

function welcomeUser(){

	var name = prompt("Enter your name:");
	alert("Welcome! "+ name);

}


function WhatIsBigger(){
  var number1 = parseInt(prompt("Pick a number"));
  var number2 = parseInt(prompt("Pick another number"));
   if(number1>number2){ 
     alert(number1 + " is larger");
     console.log(number1 + " is larger");     
   }
   else if(number2>number1){
     alert(number2 + " is larger");
     console.log(number2 + " is larger");     
   } 
   else{
   	alert("ERROR")
   }
}


function GuessTheNumber(){
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


function SidsTing(){
		var list = [];
		var limit = parseInt(prompt("how many items in the list"));
			for(i=0;i<limit;i++){
			var question =prompt("input items")
			list.push(question);
		}
		document.getElementById("jeff").innerHTML = "Grocery List: " +  list;
	}


function StringLength(){
	var argument = prompt("What String length do you want to know ?");
	var length = argument.length;
	document.getElementById("str").innerHTML = "The length of the string is: " + length;

}


function MSpongeBobMeme(){
  var msg = prompt("Input the sentance to change the caps (make sure to put lowercase)");
  var manipulated = "";
  for (var i = 0; i < msg.length; i++) {
    if (i % 2==0) {
     manipulated = manipulated + msg[i].toLocaleLowerCase();
     document.getElementById("meme").innerHTML = manipulated;
    }
    else{
     manipulated = manipulated + msg[i].toLocaleUpperCase();
     document.getElementById("meme").innerHTML = manipulated;   
        }
  }
}


function Logln(){
	var unsername = "BRUH";
	var pass = "word";
	var inputUN = prompt("Enter unsername(lowercase).").toLocaleUpperCase();
	if (inputUN = unsername){
		document.getElementById("login").innerHTML = "Unsername:" + inputUN;
		var inputP = prompt("Enter password.");
		if (inputP = pass) {
			document.getElementById("login2").innerHTML = "Password:" + inputP;
			alert("Welcome User");		
		}
		else{
			alert("Invalid Unsername");
		}
	}
	else{
		alert("Invalid Password");

	}
}


function Pig(){
	var wordarray = [];
	var message = prompt("What message do you want to encode?");
	var list = message.split(" ");
	for(var i = 0; i < list.length; i++){

		if (list[i].length <= 3) {
			wordarray.push(list[i]);
		}
		else{
			var word = list[i];
			var EndingWord = list[i].slice(0,1) + "ay";
			var BeginingWord = list[i].slice(1);
			wordarray.push(BeginingWord+EndingWord);
				
			}	
		}
		console.log(wordarray);
	}


function Encrypting(){
var mesge = prompt("What message do you want to encode?");
var empty = "";
var lth = mesge.length;
	for(var i = 0; i < lth; i++){
		var c = mesge.charCodeAt(i);
		var n = ((c*369)+12);
		var x = String.fromCharCode(n);
		empty += x;
		}
  document.getElementById("Result").innerHTML = "Encryption: " + empty;
	}


function Decryption(){
var decode = prompt("What message do you want to decode?");
var thing = "";
var l = decode.length;
	for (var i = 0; i < l; i++) {
		 var y = decode.charCodeAt(i);
		 var o = ((y-12)/369);
     var d = String.fromCharCode(o);
     thing += d;
   }
document.getElementById("Result2").innerHTML = "Decryption: " + thing;
}


window.onscroll = function() {Top()};
function Top(){
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("Top").style.display = "block";
  } else {
    document.getElementById("Top").style.display = "none";
  }
}


function Up() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



