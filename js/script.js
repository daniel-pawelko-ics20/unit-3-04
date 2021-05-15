// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

// Defining function that actives when user presses "Calculate" Button
function userInputClick() {
  // Get input from user and store it in const variable
  const fahren = parseFloat(document.getElementById("fahren-entered").value)

  // Making calculations
  const celsius = (fahren-32)*5/9

  // Output calculations
  document.getElementById('celsius').innerHTML = fahren + "°F == " + celsius.toFixed(2) + "°C"
}