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
	//declare main functions
	//Automatically fill blanks with predefined words
	var fill = function () {
		
		
	};
	//Let users fill the gaps
	var userFill = function () {
		
	};
	
	//attach eventListeners with specific functions to buttons 
	preFill.addEventListener('click', fill);
	userInput.addEventListener('click', userFill);
}());
