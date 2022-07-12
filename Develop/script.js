// Assignment code here
// Functions to randomly Generate Passwords https://www.net-comber.com/charset.html
function lowerCase() {
  //Sting.fromCharCode will generate charecters based off there code // Math.Random Generates a Random Decimal * (sets a limit)
  //Math.floor will round down the Decimal
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function upperCase() {
  //Sting.fromCharCode will generate charecters based off there code // Math.Random Generates a Random Decimal * (sets a limit)
  //Math.floor will round down the Decimal
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  //Sting.fromCharCode will generate charecters based off there code // Math.Random Generates a Random Decimal * (sets a limit)
  //Math.floor will round down the Decimal
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
  //Will pull random, kind of like using an array
  const symbols = '!@#$%^&*()[]{}=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//console.log(randomSymbol());     

//Prompt user to select a password between 8 & 128 characters (This prompt should have a if function incase user enters a value to high or to low)
passwordLength = prompt("How long would you like your password to be? I can Generate a Password between 8 - 128 characters.");
if (passwordLength < 8 || passwordLength > 128) {                                                     // This Operator will make sure the user stays within guidlines.
  return "Please choose a Password between 8 -128 charecters.";                                       // If the user chooses a password less than 8 or greater than 128, this message will display.
} else {
  alert("Thank you, your Password will be " + passwordLength + " characters long.")                   // When user enters a Password Length within the givien parameters, This message will display.
}

//I need a prompt to ask the user if they would like lowercase letters in their new password. ?????
wantLowerCase = confirm ("Would you like to include Lowercase letters in your Password?");
if (wantLowerCase) {
  alert("I will include Lowercase letters in your Password.")
} else {
  ("I will remove Lowercase letters from your Password.")
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);