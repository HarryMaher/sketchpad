$(document).ready(function(){
	drawDivs(16);
	controlFlow()
});
var randy = false; // default to purple and white
var currentSize = 16; //default current size

function controlFlow(){
	if(randy==false){
		purpleDivs();
	}else if(randy==true){
		colorDivs(); 
	}
}

function drawDivs(size){
	$('div.divvy').remove(); // get rid of the old divs
	overallWidth = $("#divs").width() //note: width of 'big' draw box
	divWidth = overallWidth/size //note: width of each individual div
	for (var i = 0; i<size;i++){
		$("#divs").append('<div id="row'+i+'" class="row"></div>');//makes new row
		for(var b = 0; b<size;b++){
			$("#row"+i).append('<div class="divvy" style="width:'+ String(divWidth) +'px;height:'+String(divWidth)+'px"></div>');
		//above makes each new div and puts it in the right row
		}
	}
}



function purpleDivs(){
	$('.divvy').hover(function(){
	$(this).css({'background-color':'#49274A', 'opacity': '1'})
	});
}

function rand(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorDivs(){
	$('.divvy').hover(function(){
	$(this).css({"background-color": "hsl( 298, "+ rand(20,75) +"%, "+rand(15, 48) +"%)", "opacity":"1" }) 
	
	//The random purple maker 
	//http://stackoverflow.com/questions/26287745/how-can-i-generate-a-list-of-random-shades-of-a-particular-color-e-g-random-s
	
	});
}


function randColor(){
	fader = false;
	randy = true;
	controlFlow();
}

function purple(){
	randy = false;
	fader = false;
	controlFlow();
}


function clearDivs(){
	drawDivs(currentSize);
	controlFlow();
}


function sizePrompt(){
	currentSize = prompt("Enter the number of rows you want the square to have (max is 80):")
	if(currentSize>80){
		currentSize = 80;
	}else if((isNaN(currentSize) == true)||(currentSize < 0)|| (currentSize == null)){
		alert("Sorry, that's not a positive number. The pad will reset to the default resolution of 16x16.")
		currentSize = 16;
	}else {
		currentSize = Math.round(currentSize)
	} 
	drawDivs(currentSize);
	controlFlow();
}
