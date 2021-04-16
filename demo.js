let string="";
let screenUpper = document.getElementById("screenUpper");
let screenLower = document.getElementById("screenLower");
let buttonEqual = document.getElementById("=");
let buttonDiv   = document.getElementById("/");
let buttonProd  = document.getElementById("*");
let buttonMinus = document.getElementById("-");
let button7		= document.getElementById("7");
let button8		= document.getElementById("8");
let button9		= document.getElementById("9");
let buttonPlus	= document.getElementById("+");
let button4		= document.getElementById("4");
let button5		= document.getElementById("5");
let button6		= document.getElementById("6");
let buttonback	= document.getElementById("delete");
let button1		= document.getElementById("1");
let button2		= document.getElementById("2");
let button3		= document.getElementById("3");
let buttonallclr= document.getElementById("AC");

function addEntry(e) {
	 string += e;
	 screenLower.innerHTML= string;
	 return string;
}

function removeEntry() {
	if(string.length > 0 ){
	string = string.substr(0, string.length - 1 );
	screenLower.innerHTML= string;
	}
}	

function allClear(){
	string = "";
	screenLower.innerHTML= "";
	screenUpper.innerHTML= "";
}

function compute(){
	screenLower.innerHTML = eval(string);
	screenUpper.innerHTML = string;
}


button7.addEventListener("click" , function(){ addEntry(7); });
button8.addEventListener("click" , function(){ addEntry(8); });
button9.addEventListener("click" , function(){ addEntry(9); });
button4.addEventListener("click" , function(){ addEntry(4); });
button5.addEventListener("click" , function(){ addEntry(5); });
button6.addEventListener("click" , function(){ addEntry(6); });
button3.addEventListener("click" , function(){ addEntry(3); });
button2.addEventListener("click" , function(){ addEntry(2); });
button1.addEventListener("click" , function(){ addEntry(1); });
buttonEqual.addEventListener("click" , function(){ compute(); });
buttonPlus.addEventListener("click" , function(){ addEntry('+'); });
buttonProd.addEventListener("click" , function(){ addEntry('*'); });
buttonDiv.addEventListener("click" , function(){ addEntry('/'); });
buttonallclr.addEventListener("click" , function(){ allClear(); });
buttonMinus.addEventListener("click" , function(){ addEntry('-'); });
buttonback.addEventListener("click", function(){removeEntry()});










