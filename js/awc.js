var group1;
var group2;
var group3;
var group4;
var flagPauseGlobal = false;
var countGlobal = 0;

function pauseGlobal(){
	flagPauseGlobal = true;
	group1.pause();
	group2.pause();
	group3.pause();
	group4.pause();
}

function goToGlobal(){
	pauseGlobal();
	clearHintGlobal();
	countGlobal = parseInt(yearTo.value) -  data[0].iniYear;
	group1.yearTo.selectedIndex = countGlobal;	
	group2.yearTo.selectedIndex = countGlobal;
	group3.yearTo.selectedIndex = countGlobal;
	group4.yearTo.selectedIndex = countGlobal;
	group1.count = countGlobal;
	group2.count = countGlobal;
	group3.count = countGlobal;
	group4.count = countGlobal;
	plotYearGlobal();	
}

function plotYearGlobal(){
	group1.plotYear();
	group2.plotYear();
	group3.plotYear();
	group4.plotYear();
}

function clearHintGlobal(){
		group1.cleanHint();
		group2.cleanHint();
		group3.cleanHint();
		group4.cleanHint();
}

function playGlobal(){
	flagPauseGlobal = false;
	group1.play();
	group2.play();
	group3.play();
	group4.play();
}

function playPauseGlobal(){
	if(flagPauseGlobal){
		playGlobal();
	}else{
		pauseGlobal();
	}
}

function resize(){
	
	if(parseInt(window.innerWidth) > 345){
	
		var fator = 2;
		if(parseInt(window.innerWidth) < 750) fator = 1;
		
		var w = Math.ceil(parseInt(window.innerWidth)/fator) - 15*fator;
		
		document.getElementById('group1').style.width = w + "px";
		document.getElementById('group2').style.width = w + "px";
		document.getElementById('group3').style.width = w + "px";
		document.getElementById('group4').style.width = w + "px";
	}
}

document.addEventListener( "DOMContentLoaded", function() {
	yearTo = document.getElementById("yearTo");
	yearTo.options = new Array();
	for(var y= data[0].iniYear, i=0; y<= data[0].endYear; y++,i++){
		yearTo.options[i]= new Option(y, y);
	}
	
	group1 = document.getElementById('group1').contentWindow;	
	group2 = document.getElementById('group2').contentWindow;
	group3 = document.getElementById('group3').contentWindow;
	group4 = document.getElementById('group4').contentWindow;
	

	resize();
	
});


