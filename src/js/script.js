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
		validationOutput = document.getElementById('validationOutput'),
		//declare helper functions
		//random number
		randomise = function (numMax) {
			return (Math.floor(Math.random() * numMax));
		},
		//function to iterate throught the nodelist
		wordNodes = function (tempWord, arr) {
			var i,
				randNum;
				//using for..  to iterate over selected nodelist and replace words
			for (i = 0; i < tempWord.length; i++) {
					//remove class editable when user change from their own input to prefill
				tempWord[i].classList.remove('editable');
				//console.log(item);
				randNum = randomise(arr.length);
				if (arr.length > 1) {
					tempWord[i].innerText = arr.splice(randNum, 1);
				} else if (arr.length === 1) {
					tempWord[i].innerText = arr.splice(0, 1);
				} else {
					tempWord[i].innerText = 'Runned out of words';
				}
			}
		},
		inputValid = function () {
			var letters = /^[a-zA-Z]+$/;
			if ( this.value.match(letters) ){
				this.parentElement.innerText = this.value;
//				validationOutput.classList.add('success');
//				validationOutput.childNodes[0].innerText = 'Clever story ;)';
				console.log('letters');
				//inputVal(this.value);
			} else {
				this.style.borderBottomColor = 'red';
//				validationOutput.classList.add('error');
//				validationOutput.childNodes[0].innerText = 'Please use only letters, and single words';
				console.log('not letters');
				return false;
			}
		},
//		inputVal = function (val) {
//			
//		},
		//function adds inputs to each span (blank space)
		addInputs = function (tempWord) {
			var item,
				input;
			//using for.. of to iterate over selected nodelist and glue inputs to them
			for (item of tempWord) {
					//clear prefilled blanks and add class editable to each one
				item.innerText = '';
				item.classList.add('editable');
				//create input and append it to each item
				input = document.createElement('input');
				item.appendChild(input);
				//add events to each created inputs
				//input.addEventListener('click', inputVal);
				input.addEventListener('blur', inputValid);
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
	//attach eventListeners with specific functions to elements 
	preFill.addEventListener('click', fill);
	userInput.addEventListener('click', userFill);
}());