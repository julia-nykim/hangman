// JavaScript Document

// Categories


var food = ["cake", "steak", "carrot", "zucchini", "cucumber", "cookie", "tomato", "potato", "bacon", "pork", "kimchi", "kale", "bread", "soup", "peach", "pear", "banana", "watermelon", "mango", "grapes", "tofu", "rice", "egg", "avocado", "doughnut", "cereal", "hamburger", "eggplant", "walnut", "cashew", "pie", "zucchini", "squash", "peanut", "fries", "pizza", "popcorn", "cheeseburger"];
var sports = ["baseball", "football", "soccer", "tennis", "badminton", "basketball", "hockey", "swimming", "volleyball", "fencing", "skiing", "snowboarding", "gymnastics", "golf", "boxing", "wrestling", "polo", "cricket", "bowling", "archery", "skating", "karate", "taekwondo", "cycling"];
var animals = ["ant", "squirrel", "rabbit", "dog", "cat", "salamander", "alligator", "crocodile", "donkey", "horse", "tiger", "lion", "cheetah", "leopard", "lemur", "chinchilla", "baboon", "deer", "badger", "owl", "caterpillar", "butterfly", "dolphin", "mouse", "fish", "alpaca", "beetle", "bobcat", "bullfrog", "butterfly", "capybara", "caterpillar", "chipmunk", "crab", "deer", "dolphin", "elephant", "fly", "chameleon", "ferret", "donkey", "groundhog"," lizard", "lion", "lamb", "kangaroo", "jaguar", "mole", "panda", "peacock", "mockingbird",  "needlefish", "osprey", "peafowl", "piranha", "octopus", "puppy", "quail", "pigeon", "orca", "mouse", "llama", "lovebird", "lynx", "manatee", "python", "salamander", "rat", "slug", "snail", "songbird", "tadpole", "turkey", "urchin", "viper", "wren", "wasp", "yellowjacket", "zebra", "bat"];
var countries = ["argentina", "america", "china", "japan", "russia", "canada", "brazil", "italy", "australia", "mexico", "spain", "korea", "egypt", "greece", "france", "greenland", "iceland", "england", "portugal", "vietnam", "india", "philippines", "belgium", "bangladesh", "finland", "jamaica" , "poland", "switzerland", "sweden", "singapore", "turkey", "ukraine", "uganda", "pakistan", "peru", "portugal", "netherlands", "mongolia", "madagascar", "argentina"];




// Category Functions
function f() {
	category = "food";
	document.getElementById("food").style.border = "solid bisque 4px";
	document.getElementById("sports").style.border = "none";
	document.getElementById("animals").style.border = "none";
	document.getElementById("countries").style.border = "none";
	gen();
}
function s() {
	category = "sports";
	document.getElementById("sports").style.border = "solid bisque 4px";
	document.getElementById("food").style.border = "none";
	document.getElementById("animals").style.border = "none";
	document.getElementById("countries").style.border = "none";
	gen();
}
function a() {
	category = "animals";
	document.getElementById("animals").style.border = "solid bisque 4px";
	document.getElementById("food").style.border = "none";
	document.getElementById("sports").style.border = "none";
	document.getElementById("countries").style.border = "none";
	gen();
}
function c() {
	category = "countries";
	document.getElementById("countries").style.border = "solid bisque 4px";
	document.getElementById("food").style.border = "none";
	document.getElementById("sports").style.border = "none";
	document.getElementById("animals").style.border = "none";
	gen();
} 





var counter = 0;
var storage = 0;
var index = [];
var right = false;
var blank = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var imgCount = 1;
var testEqual = "";
var none = ["food", "sports", "animals", "countries"]
var wins = 0;
var losses = 0;
var moveLimit = 7;


function difficulty(diff) {
	if(diff == "easy") {
		moveLimit = 10;
		document.getElementById("movesLeftP").innerHTML = "Chances Left: 10";
		document.getElementById("easy").style.border = "solid bisque 4px";
		document.getElementById("normal").style.border = "none";
		document.getElementById("hard").style.border = "none";
	} else if(diff == "normal") {
		moveLimit = 7;
		document.getElementById("movesLeftP").innerHTML = "Chances Left: 7";
		document.getElementById("normal").style.border = "solid bisque 4px";
		document.getElementById("easy").style.border = "none";
		document.getElementById("hard").style.border = "none";
	} else if(diff == "hard") {
		moveLimit = 5;
		document.getElementById("movesLeftP").innerHTML = "Chances Left: 5";
		document.getElementById("hard").style.border = "solid bisque 4px";
		document.getElementById("easy").style.border = "none";
		document.getElementById("normal").style.border = "none";
	}
}

var category = "none";

function v(x) {
	var test = x.toLowerCase();
	for(var i = 0; i < randselect.length; i++) {
		if(randselect.charAt(i) == test) {
			right = true;
			index[counter] = i;
			counter++;
		}
		/*var array = document.getElementsByClassName("used button letter");
		for(var i = 0; i < array.length; i++) {
			array[i].style.display = "none";
		}
		var array2 = document.getElementsByClassName("button letter");
		for(var i = 0; i < array2.length; i++) {
			array2[i].style.display = "inline";
		}*/
	}
	document.getElementById("words").innerHTML = blank;
	//document.getElementById("words").innerHTML = "testing";
	$("#"+x.toLowerCase() + "_used").show();
	$("#" + x.toLowerCase()).hide();
	
	if(right == false) {
		document.getElementById("movesLeftP").innerHTML = "Chances Left: " + (moveLimit - imgCount - 1);
		imgCount++;
		$("#hangmanpng").attr("src", "images/Hangman-" + imgCount + ".png");
		if(imgCount == moveLimit) {
			alert("Game Over. \nThe correct word was " + randselect.toUpperCase() + ".");
			losses++;
			document.getElementById("scores").innerHTML = "Wins: " + wins + " | Losses: " + losses;
			gen();
		}
		
	} else {
		for(var j = 0; j < index.length; j++) {
			if(index[j] == 0) {
				blank = x + blank.substring(1, blank.length);
			} else {// _ _ _ _ _ 
				blank = blank.substring(0, 2*index[j]) + x + blank.substring(2*index[j]+1, blank.length);
			}
		}
		update_display();
	}
	
	index = [];
	counter = 0;
	right = false;
	//alert(blank + "..." + testEqual + "...." + randselect);
	if(testEqual == blank) {
		alert("You win! \nThe correct word was " + randselect.toUpperCase() + ".");
		wins++;
		document.getElementById("scores").innerHTML = "Wins: " + wins + " | Losses: " + losses;
		gen();
	}
}

function update(a) {
	document.getElementById("words").innerHTML = a;
}
function gen() {
	blank = "";
	testEqual = "";
	if(category == "none") {
		category = none[Math.floor(Math.random() * none.length)];
	}
	if(category == "food") {
		randselect = food[Math.floor(Math.random() * food.length)];
		document.getElementById("food").style.border = "solid bisque 4px";
		document.getElementById("sports").style.border = "none";
		document.getElementById("animals").style.border = "none";
		document.getElementById("countries").style.border = "none";
	} else if(category == "sports") {
		randselect = sports[Math.floor(Math.random() * sports.length)];
		document.getElementById("sports").style.border = "solid bisque 4px";
		document.getElementById("food").style.border = "none";
		document.getElementById("animals").style.border = "none";
		document.getElementById("countries").style.border = "none";
	} else if(category == "animals") {
		randselect = animals[Math.floor(Math.random() * animals.length)];
		document.getElementById("animals").style.border = "solid bisque 4px";
		document.getElementById("food").style.border = "none";
		document.getElementById("sports").style.border = "none";
		document.getElementById("countries").style.border = "none";
	} else if(category == "countries") {
		randselect = countries[Math.floor(Math.random() * countries.length)];
		document.getElementById("countries").style.border = "solid bisque 4px";
		document.getElementById("food").style.border = "none";
		document.getElementById("sports").style.border = "none";
		document.getElementById("animals").style.border = "none";
	}
	// Prints blank underscores
	for(var i = 0; i < randselect.length; i++) {
		blank += "_ ";
	}
	update_display();
	//document.getElementById("test").innerHTML = randselect;
	for(var i = 0; i < alphabet.length; i++) {
		$("#" + alphabet.charAt(i)).show();
		$("#" + alphabet.charAt(i) + "_used").hide();
	}
	for(var j = 0; j < randselect.length; j++) {
		testEqual += randselect[j] + " ";
		//alert(randselect[j] + "..." + randselect);
	}
	
	$("#hangmanpng").attr("src", "images/Hangman.png");
	imgCount = 1;
	document.getElementById("movesLeftP").innerHTML = "Chances Left: " + moveLimit;
	testEqual = testEqual.toUpperCase();
}

function update_display() {
	document.getElementById("words").innerHTML = blank;
}

// Random Word Chooser

var randselect = "";
var blank = "";

window.onload = gen;
