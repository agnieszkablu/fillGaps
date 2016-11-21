(function () {		// IIFE
	//create variables
	'use strict';
	var tempNoun = document.querySelectorAll('.noun'),
		tempVerb = document.querySelectorAll('.verb'),
		tempAdj = document.querySelectorAll('.adj'),
		nouns = ['mountains', 'ocean'],
		verbs = ['live', 'supplies', 'flows'],
		adjectives = ['small', 'large'],
		preFill = document.getElementById('preFill'),
		userInput = document.getElementById('userInput'),
		//declare helper functions
		//random number
		randomise = function (numMax) {
			return (Math.floor(Math.random() * numMax));
		};
			//function to iterate throught the nodelist
//		wordNodes = function (tempWord, word, num) {
//			var item,
//					randNum = randomise(num);
//			for (item of tempWord) {
//				item.innerHTML = word[randNum];
//					console.log(randNum);
//				console.log(word[randNum]);
//			}
//		};
	//declare main functions
	//Automatically fill blanks with predefined words
	function fill() {
		//using for.. of to iterate over selected nodelist
			
//		wordNodes(tempNoun, nouns, 2);
			var item,
					splicedElem;
			for (item of tempNoun) {
				
				if (nouns.length > 1){
					splicedElem = nouns.splice(randomise(2), 1);
					item.innerHTML = splicedElem;
				}else if(nouns.length == 1){
						item.innerHTML = nouns.splice(0,1);
				}else{
						item.innerHTML = 'Runned out of words';
				}
			}
			for (item of tempVerb) {
				item.innerHTML = verbs[randomise(3)];
			}
			for (item of tempAdj) {
				item.innerHTML = adjectives[randomise(2)];
			}
	}
	//Let users fill the gaps
	function userFill() {
		
	}
	
	//attach eventListeners with specific functions to buttons 
	preFill.addEventListener('click', fill);
	userInput.addEventListener('click', userFill);
}());
