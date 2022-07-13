// Assignment code here
// Functions to randomly Generate Passwords with the help of .fromCharCode https://www.net-comber.com/charset.html
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
function generatePassword(){
// * I need to create a prompt to have a user select how long they would like their Password to be. * An if / else statement with Operators may work *
//Prompt user to select a password between 8 & 128 characters (This prompt should have a if function incase user enters a value to high or to low)
var passwordLength = prompt("How long would you like your password to be? I can Generate a Password between 8 - 128 characters.");
if (passwordLength < 8 || passwordLength > 128) {                                                     // This Operator will make sure the user stays within guidlines.
  alert("Please choose a Password between 8 -128 charecters.");                                       // If the user chooses a password less than 8 or greater than 128, this message will display.
} else {
  alert("Thank you, your Password will be " + passwordLength + " characters long.")                   // When user enters a Password Length within the givien parameters, This message will display.
}
// var array1 = ["A"]
// var array2 = ["a"]
// var array2 = array1.concat(array2)
// * I need a prompt to ask the user if they would like lowercase letters in their new password. * (Done)
// * I can't get my alerts to display on the Webpage. * What could cause this error? * 
// **** Prompts are displaying when Webpage loads ****** This needs to be fixed ****
var wantLowerCase = confirm ("Would you like to include Lowercase letters in your Password?");            // This will create a prompt for the user to select OK if they want Lowercase and Cancel to skip this selection.
if (wantLowerCase) {
  alert("I will include Lowercase letters in your Password.")
} else {
  alert("I will remove Lowercase letters from your Password.");
}

var wantUpperCase = confirm ("Would you like to include Uppercase letters in your Password");             // This will create a prompt for the user to select OK if they want Uppercase and Cancel to skip this selection.
if (wantUpperCase) {
  alert("Great choice, I will make sure to include Capital letters in your Password")
} else {
  alert("I will remove Capital Letters from your Password");
}

var wantNumbers = confirm ("Numbers are a Great way to add to the security of your Password, would you like to include them?");       // This will create a prompt for the user to select OK if they want Numbers and Cancel to skip this selection.
if (wantNumbers) {
  alert("Excellent, it would be my pleasure to add numbers to your Password.");
}

var wantSymbols = confirm ("Last but not least, I would highly recommend putting a symbols in your Password for that extra layer of security. Would you like me to do so?");      // This will create a prompt for the user to select OK if they want Symbols and Cancel to skip this selection.
if (wantSymbols) {
  alert("Perfect, let me crunch some numbers and you will have your Brand New Password before you can blink.")
} else {
  alert("I will remove symbols from your Password.")
}

// * Should I make a prompt in the scenario that the user selects no for everything??? *
// ** This code feels wrong ** Do more research **
if (wantLowerCase === false && wantUpperCase === false && wantNumbers === false && wantSymbols === false) {
  alert("For a more secure Password, Pleaase select either Upper or Lower case Letter or a Number or Symbol.");
}

// * I need to write code to combine the choices for Password together *

return
}

// **** I need a way to combine the results **** review JavaSrcipt Book and check Online resources ****

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

// Pick Criteria
// User input -> criteria
// [A,B,C...], [a, b, c..]
// Add together to get master set
// [A,B,C, 1,2,3...]
//  Length => Loop Run for as many iterations as our length... 1 charcter or each loop

