(function () {		// IIFE
	//create variables
	'use strict';
	var tempNoun = document.querySelectorAll('.noun'),
		tempVerb = document.querySelectorAll('.verb'),
		tempAdj = document.querySelectorAll('.adj'),
		words = {
			nouns : ['mountains', 'ocean'],
			verbs : ['live', 'supplies', 'flows'],
			adjectives : ['small', 'large']
		},
		preFill = document.getElementById('preFill'),
		userInput = document.getElementById('userInput'),
		//declare helper functions
		//random number
		randomise = function (numMax) {
			var value;
			value = Math.floor(Math.random() * numMax);
			return value;
		};
		//wordNodes = function (tempWord, num) {
//			var item,
//				randomNum = randomise(num);
//			for ( item of tempWord ) {
//				
//				item.innerHTML = words.tempWord[randomNum];
//			}
		//};
	//declare main functions
	//Automatically fill blanks with predefined words
	var fill = function () {
		//using for.. of to iterate over selected nodelist
		var item,
			randomNum;
		for ( item of tempNoun ) {
			randomNum = randomise(2);
			item.innerHTML = words.nouns[randomNum];
		}
		for ( item of tempVerb ) {
			randomNum = randomise(3);
			item.innerHTML = words.verbs[randomNum];
		}
		for ( item of tempAdj ) {
			randomNum = randomise(2);
			item.innerHTML = words.adjectives[randomNum];
		}
	};
	//Let users fill the gaps
	var userFill = function () {
		
	};
	
	//attach eventListeners with specific functions to buttons 
	preFill.addEventListener('click', fill);
	userInput.addEventListener('click', userFill);
}());
