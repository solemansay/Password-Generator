// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!@#$%^&*()-_=+/`~<>.'];


// var passLength = parseInt(prompt('How many charcters would you like? (8-128)'));
//       if (passLength <= 128 || passLength >= 8){
//         alert('Password length must be 8 to 128 characters long!');
        
//       } 
      // var passLength;

      // while (passLength >= 128 || passLength <= 8) {
        var passLength = parseInt(prompt('How many charcters would you like? (8-128)'))
    //     if (passLength <= 128 || passLength >= 8) {
    //         break;
    //     }
    //    alert("Password length must be 8 to 128 characters long!");
      
    // }

  var chosenCharactersArr = []

if (confirm('would you like Capital letters?')){
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

console.log(passLength, chosenCharactersArr)


for(var i = 0; i < passLength; i++){
  var randomUpperCase = Math.floor(Math.random() * chosenCharactersArr.length);
  var randomLowercase = Math.floor(Math.random() * chosenCharactersArr[randomUpperCase].length);
  // var randomNumber = Math.floor(Math.random() * chosenCharactersArr[randomUpperCase][randomLowercase].length);
  // var randomSymbol = Math.floor(Math.random() * chosenCharactersArr[randomUpperCase][randomLowercase][randomNumber].length);

  var password = chosenCharactersArr[randomUpperCase][randomUpperCase]//[randomNumber][randomSymbol]

  console.log(randomUpperCase, randomLowercase, password)
}




// if (userWantsDigets) {
//   choices.push(digets);
// }

// for (var i = 0; i < passLength; i++) {

// }

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
