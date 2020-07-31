// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


//var randomstring = Math.random().toString(36).slice(-8); MIGHT HELP


//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  Upper: getRandomUpper,
  number: getRandomNumber,
  Symbol: getRandomSymbol
};

//Generate event listener
generateEl.addEventListener('click', () => {
  const length = lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower, 
    hasNumber,
    hasUpper, 
    hasSymbol, 
    length
    );
});

//Generate password function
function generatePassword(lower, upper, number, symbol, length){
  //1. initialize a password variable 
  //2. filter out unchecked types
  //3. loop over length call generator function for each type
  //4. Add the final pw to the pw var and return

  var generatePassword= '';

  const typesCount = lower + upper + number + symbol;

  console.log('typescount:  ', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
  );

  console.log('typeArr:  ', typesArr);

    if(typesCount === 0) {
      return '';
    }

    for(var i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type) [0];
        generatePassword += randomFunc[funcName]();

      });

    }

}

//Generator function - http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*+()[]{}=<>/.,';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());