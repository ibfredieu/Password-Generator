// Assignment code here
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upppercaseEl = document.getElementById('upppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

//This Object will be used later 
const randomFunction = {
  lower: lowerCase,
  upper: upperCase,
  number: randomNumber,
  symbol: randomSymbol
};

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

console.log(randomSymbol());     


// Get references to the #generate element


var generateBtn = document.querySelector("#generate");


// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
