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
		wordNodes = function (tempWord, arr) {
			var i,
				randNum;
				//splicedElem;
				//using for.. of to iterate over selected nodelist and replace words
			for (i = 0; i < tempWord.length; i++) {
					//remove class editable when user change from their own input to prefill
				tempWord[i].classList.remove('editable');
				//console.log(item);
				randNum = randomise(arr.length);
				if (arr.length > 1) {
					//splicedElem = arr.splice(randNum, 1);
					tempWord[i].innerHTML = arr.splice(randNum, 1);
					console.log(arr.length);
				} else if (arr.length === 1) {
					tempWord[i].innerHTML = arr.splice(0, 1);
				} else {
					tempWord[i].innerHTML = 'Runned out of words';
				}
			}
		},
		//function adds inputs to each span (blank space)
		addInputs = function (tempWord) {
			var item,
				input;
			//using for.. of to iterate over selected nodelist and glue inputs to them
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
		wordNodes(tempNoun, nouns);
		wordNodes(tempVerb, verbs);
		wordNodes(tempAdj, adjectives);
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