var apples = 0; 

var applesPerSecond = 0;

var applesPerClick = 1;

//cost
var iPhoneCost = 10;

var bananaCost = 100;

//amount
var iPhones = 0;

var bananas = 0;

//-------------------//
function increment() {
	setInterval(function() {
	}, 100)
	apples += applesPerClick; // adds the number of apples per click to your total apples
	document.getElementById("showApples").innerText = apples; // uses DOM to change the number of apples in the HTMl

    if (apples >= 800000000) // if it's higher than the world population
	{
		document.getElementById("gameOver").innerText = "You won the game! Apple dominates the Earth!"
	}
}

// function that happens every second
setInterval(function() {
	apples += applesPerSecond; // adds the number of apples per second to your total apples
	
	document.getElementById("showApples").innerText = apples; // uses DOM to change the number of apples in the HTML
}, 1000) // every 1000 milliseconds (1 second)

function buyIPhone() {
	
	// ...
    if (apples >= iPhoneCost) { // checks if you have enough apples
		
		apples -= iPhoneCost; // subtracts cost apples 

		document.getElementById("showApples").innerText = apples; // "updates" the HTML

		iPhones++; // increments number of that item 

		document.getElementById("iPhoneNum").innerText = iPhones;

	iPhoneCost *=2; // doubles price of that item 

	document.getElementById("iPhoneCost").innerText = iPhoneCost;

	applesPerSecond += 1; // increases number of apples per second

	document.getElementById("showApplesPerSecond").innerText = applesPerSecond;	

	}	else { // if there enough apples
		alert("You don't have enough Apples!") 
	}
}

function buyBanana() {

	if (apples >= bananaCost) {
		
		apples -= bananaCost; 

		document.getElementById("showApples").innerText = apples;

		bananas++; 

		document.getElementById("bananaNum").innerText = bananas;
	
		bananaCost *=2; 

		document.getElementById("bananaCost").innerText = bananaCost;

		applesPerClick += 1; // increases number of apples per click

		document.getElementById("showApplesPerClick").innerText = applesPerClick;
	
	} else { 
		alert("You don't have enough Apples!")
	}
}