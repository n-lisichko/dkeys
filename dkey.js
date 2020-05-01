function posressel() {
	var elements = document.getElementsByClassName("restaxon");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#f5f3f0"; 
		elements[i].style.borderLeft = "7px solid #f5f3f0";
	}
	for (var k = 0, j = arguments.length; k < j; k++){
	var elements = document.getElementsByClassName(arguments[k]); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#ecc893";
		elements[i].style.borderLeft = "7px solid #98661b";
	}
	}
}

function posstesel() {
	var elements = document.getElementsByClassName("thesis");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#f5f3f0";
	}
	var elements = document.getElementsByClassName("antithesis");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#f5f3f0";
	}
	for (var k = 0, j = arguments.length; k < j; k++){
	var elements = document.getElementsByClassName(arguments[k]);
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#ecc893";
	}
	}
	
}

function stbmset() {
		for (var k = 0, j = arguments.length; k < j; k++){
	var elements = document.getElementsByClassName(arguments[k]); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.borderLeft = "7px solid #5c503d";
	}
	}
	
	
}

function mrkths() {
	for (var k = 0, j = arguments.length; k < j; k++){
	var elements = document.getElementsByClassName(arguments[k]); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.outline = "2px solid #5c503d";
	}
	}
	
	var elements = document.getElementsByClassName("bttnmark"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
	var elements = document.getElementsByClassName("bttnunmark");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "inline";
	}
}

function mrktxn() {
	var elements = document.getElementsByClassName("restaxon"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#f5f3f0";
	}
	for (var k = 0, j = arguments.length; k < j; k++){
	var elements = document.getElementsByClassName(arguments[k]); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#ecc893";
	}
	}
}

function stbmrem() {
	var elements = document.getElementsByClassName("bttnmark");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "inline";
	}
	
	var elements = document.getElementsByClassName("couplet");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.borderLeft = "7px solid #f5f3f0";
	}
	
	var elements = document.getElementsByClassName("thesis");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.outline = "none";
	}
	
	var elements = document.getElementsByClassName("antithesis");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.outline = "none";
	}
	
	var elements = document.getElementsByClassName("bttnunmark");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
}

function resettaxa() {
	var elements = document.getElementsByClassName("restaxon");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#f5f3f0";
		elements[i].style.color = "black";
		elements[i].style.borderLeft = "7px solid #f5f3f0";
	}
}

function resetsteps() {
	var elements = document.getElementsByClassName("thesis");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#f5f3f0"; 
		elements[i].style.outline = "none";
	}
	var elements = document.getElementsByClassName("antithesis");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#f5f3f0";
		elements[i].style.outline = "none";
	}
	var elements = document.getElementsByClassName("couplet");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.borderLeft = "7px solid #f5f3f0";
	}
	var elements = document.getElementsByClassName("bttnunmark");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none"; 
	}
	var elements = document.getElementsByClassName("bttnmark");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "inline";
	}
	
	var elements = document.getElementsByClassName("lead");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.outline = "none";
	}
}

function pathmark() {
	for (var k = 0, j = arguments.length; k < j; k++){
	var elements = document.getElementsByClassName(arguments[k]);
	for(var i = 0; i < elements.length; i++){
		elements[i].style.outline = "3px solid #5900b3";
	}
	}
	
	
}

function setlngua() {
	var elements = document.getElementsByClassName("itxtru"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
	var elements = document.getElementsByClassName("itxteng"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
	var elements = document.getElementsByClassName("itxtua"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "inline";
	}
}

function setlngru() {
	var elements = document.getElementsByClassName("itxtru"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "inline";
	}
	var elements = document.getElementsByClassName("itxteng"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
	var elements = document.getElementsByClassName("itxtua"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
}

function setlngeng() {
	var elements = document.getElementsByClassName("itxtru"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
	var elements = document.getElementsByClassName("itxteng"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "inline";
	}
	var elements = document.getElementsByClassName("itxtua"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
}

function addregsel(){
	for (var k = 0, j = arguments.length; k < j; k++){
	var elements = document.getElementsByClassName(arguments[k]); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.opacity = "100%";
		elements[i].style.color = "#000000";
	}
	}
}

function startregsel() {
	var elements = document.getElementsByClassName("regionshide"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "inline";
	}
	var elements = document.getElementsByClassName("regionselector"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "block";
	}
	var elements = document.getElementsByClassName("regionsactivate"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
	var elements = document.getElementsByClassName("thesis"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.opacity = "40%";
		elements[i].style.color = "#c2b6a3";
	}
	var elements = document.getElementsByClassName("antithesis"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.opacity = "40%";
		elements[i].style.color = "#c2b6a3";
	}
	var elements = document.getElementsByClassName("restaxon"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.opacity = "40%";
		elements[i].style.color = "#c2b6a3";
	}
}

function stopregsel() {
	var elements = document.getElementsByClassName("regionshide"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
	var elements = document.getElementsByClassName("regionselector"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
	var elements = document.getElementsByClassName("regionsactivate"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "inline";
	}
	var elements = document.getElementsByClassName("thesis"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.opacity = "100%";
		elements[i].style.color = "#000000";
	}
	var elements = document.getElementsByClassName("antithesis"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.opacity = "100%";
		elements[i].style.color = "#000000";
	}
	var elements = document.getElementsByClassName("restaxon"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.opacity = "100%";
		elements[i].style.color = "#000000";
	}
}

function markregsel(){
	for (var k = 0, j = arguments.length; k < j; k++){
	var elements = document.getElementsByClassName(arguments[k]); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#ffd11a";
	}
	}
}

function regreset() {
	var elements = document.getElementsByClassName("textbuttonb"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#e0dad1";
	}
	var elements = document.getElementsByClassName("thesis"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.opacity = "40%";
		elements[i].style.color = "#c2b6a3";
	}
	var elements = document.getElementsByClassName("antithesis"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.opacity = "40%";
		elements[i].style.color = "#c2b6a3";
	}
	var elements = document.getElementsByClassName("restaxon"); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.opacity = "40%";
		elements[i].style.color = "#c2b6a3";
	}
}

function closeimg(){
	var elements = document.getElementsByClassName("figdiv");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
}

function showfig(){
	var elements = document.getElementsByClassName("figdiv");
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";
	}
	for (var k = 0, j = arguments.length; k < j; k++){
	var elements = document.getElementsByClassName(arguments[k]); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "block";
	}
	}
}