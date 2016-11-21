(function () {		// IIFE
	//create variables
	'use strict';
	var tempNoun = document.querySelectorAll('.noun'),
		tempVerb = document.querySelectorAll('.verb'),
		tempAdj = document.querySelectorAll('.adj'),
		nouns = ['mountains', 'ocean', 'lake', 'sun', 'shadow'],
		verbs = ['live', 'supplies', 'flows', 'dies'],
		adjectives = ['small', 'large', 'huge', 'little', 'tiny', 'enormous'],
		preFill = document.getElementById('preFill'),
		userInput = document.getElementById('userInput'),
		//declare helper functions
		//random number
		randomise = function (numMax) {
			return (Math.floor(Math.random() * numMax));
		},
		//function to iterate throught the nodelist
		wordNodes = function (tempWord, arr, num) {
			var item,
				randNum = randomise(num),
				splicedElem;
				//using for.. of to iterate over selected nodelist and replace words
			for (item of tempWord) {
					//remove class editable
				item.classList.remove('editable');
				if (arr.length > 1) {
					//splicedElem = arr.splice(randNum, 1);
					item.innerHTML = arr.splice(randNum, 1);
				} else if (arr.length === 1) {
					item.innerHTML = arr.splice(0, 1);
				} else {
					item.innerHTML = 'Runned out of words';
				}
			}
		},
		//function adds inputs to each span (blank space)
		addInputs = function (tempWord) {
			var item,
				input;
			for (item of tempWord) {
					//clear prefilled blanks
				item.innerHTML = '';
				input = document.createElement('input');
				item.classList.add('editable');
				item.appendChild(input);
			}
		};
	//declare main functions
	//Automatically fill blanks with predefined words
	function fill() {
		wordNodes(tempNoun, nouns, 5);
		wordNodes(tempVerb, verbs, 4);
		wordNodes(tempAdj, adjectives, 6);
	}
	//Let users fill the gaps
	function userFill() {
		addInputs(tempNoun);
		addInputs(tempVerb);
		addInputs(tempAdj);
	}
	
	//attach eventListeners with specific functions to buttons 
	preFill.addEventListener('click', fill);
	userInput.addEventListener('click', userFill);
}());
