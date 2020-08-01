// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '/', '~', '<', '>'];

function generatePassword() {

var proper = false;
while (!proper) {
  passLength = parseInt(prompt('How many charcters would you like? (8-128)'));
  if (passLength <= 128 && passLength >= 8) {
    alert(passLength + "! great choice! Time to select some character types.");
    proper = true;
  } else {
    alert("Password length must be 8 to 128 characters long!");
  }
}

var chosenCharactersArr = []
var passwordstring = ''


var select = false
while (!select) {

if (confirm('would you like Capital letters?')) {
  chosenCharactersArr.push(upperCase)
}

if (confirm('would you like to include lowercase letters?')) {
  chosenCharactersArr.push(lowerCase)
}

if (confirm('would you like to include numbers?')) {
  chosenCharactersArr.push(numbers)
}

if (confirm('would you like to include symbols?')) {
  chosenCharactersArr.push(symbols)
}

if (chosenCharactersArr.length === 1 || chosenCharactersArr.length === 2 || 
  chosenCharactersArr.length === 3 || chosenCharactersArr.length === 4) {
  select = true;
} else {
  alert("Password Must contain at least one type of character!");
}
}

//console.log(passLength, chosenCharactersArr)


for (var i = 0; i < passLength; i++) {
  var randomCharacterType = Math.floor(Math.random() * chosenCharactersArr.length);
  var randomCharacter = Math.floor(Math.random() * chosenCharactersArr[randomCharacterType].length);
  var password = chosenCharactersArr[randomCharacterType][randomCharacter]
  passwordstring += password

  //console.log(randomCharacterType, randomCharacter, password, passwordstring)
}

//Final password on an alert

alert('Here is your secure password: ' + passwordstring)

return passwordstring
}

// Function's to display final password in the text box

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// My event listener to generate button

generateBtn.addEventListener("click", writePassword);
