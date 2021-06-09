// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A","B","C","D","E","F","J","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCase = ["a","b","c","d","e","f","j","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","/","~","<","{","}","|",">"];

//The function responsible to begin the sequence of question.

function generatePassword() {
  //I created a while loop to prevent the user from selecting a number bellow 8 and above 128

  var lengthChoice = false;
  while (!lengthChoice) {
    passLength = parseInt(
      prompt(
        "How long would you like your password to be? (must be 8-128 characters long)"
      )
    );
    if (passLength <= 128 && passLength >= 8) {
      alert(
        passLength + "! Great choice! Time to select some character types."
      );
      lengthChoice = true;
    } else if (passLength >= 128 || passLength <= 8) {
      alert("OOPS! Password length MUST be 8 to 128 characters long!");
    } else if (input === null) {
      return;
    }
  }

  var chosenCharactersArr = [];
  var passwordstring = "";

  //I created another while loop to prevent the user from not selecting any character types
  var select = false;
  while (!select) {
    //here the users selection of true of false will be pushed to "chosenCharactersArr" array adding to the pool of available characters

    if (confirm("Would you like your password to include Capital letters?")) {
      chosenCharactersArr.push(upperCase);
    }

    if (confirm("Would you like your password to include lowercase letters?")) {
      chosenCharactersArr.push(lowerCase);
    }

    if (confirm("Would you like your password to include numbers?")) {
      chosenCharactersArr.push(numbers);
    }

    if (confirm("Would you like your password to include symbols?")) {
      chosenCharactersArr.push(symbols);
    }

    if (
      chosenCharactersArr.length === 1 ||
      chosenCharactersArr.length === 2 ||
      chosenCharactersArr.length === 3 ||
      chosenCharactersArr.length === 4
    ) {
      select = true;
    } else {
      alert("OOPS! Password MUST contain at least ONE character type!");
    }
  }

  //the for loop commences randomly selecting from the list of arrays chosen, then the arrays themselves and finally putting the final "password" into one string

  for (var i = 0; i < passLength; i++) {
    var randomCharacterType = Math.floor(
      Math.random() * chosenCharactersArr.length
    );
    var randomCharacter = Math.floor(
      Math.random() * chosenCharactersArr[randomCharacterType].length
    );
    var password = chosenCharactersArr[randomCharacterType][randomCharacter];
    passwordstring += password;
  }

  // alert('Awesome! Collect your secure password from the box bellow!')

  return passwordstring;
}

// Function to display final password in the text box

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// My event listener to generate button

generateBtn.addEventListener("click", writePassword);
