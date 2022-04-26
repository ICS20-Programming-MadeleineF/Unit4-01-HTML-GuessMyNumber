// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates random number.
 */
function makeRandomNumber() {
   	// initialize variables
	let number = ""
	
	// get user input
	let guess = parseInt(document.getElementById('guess').value)


  	// if hour is before noon, display "Good morning"
	if (guess == Math.floor(Math.random() * 6) + 1){
		number = "CORRECT!!!"
	} 
	// otherwise, if hour is before 6pm, display "Good afternoon"	
	else {
		number = "INCORRECT"
	}

  // display the results
  document.getElementById('number').innerHTML = number
}