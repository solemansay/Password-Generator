# Password-Generator functionality
The purpose of this website is to randomly generate a password of 8 to 128 characters long according to the preference of the user. Other than the length of the password the user is given the choice to include one of or all four types of the provided characters: uppercase letters, lowercase letters, numbers, and or symbols. After which a password is randomly generated from that pool of characters that the user selected and appears in the text box.

# how it works:
This website came with a framework, including the complete HTML and CSS files, all I had to do was add to the javascript file to create the password generator engine. 

The first thing that I created was a couple of arrays holding the possible character selections:

    - var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    - var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    - var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    - var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '/', '~', '<', '{', '}', '|', '>'];


 After this, I began writing the password generation function (generatePassword), inside of the curly brackets of this function I began with a prompt asking the user to input the desired password length within 8-128 characters long. 

If the input was 0-7 or 129 and above, an alert would show stating that the user must choose a number between 8 and 128 and then returning them to the previous prompt. 

I accomplished this using a while loop creating a variable called "lengthChoice" and giving it the value of false, stating that while it remains
false (the user chooses between 0-7 or 129 above) they will stay in the prompt loop. To change that variable's value to true and break the loop the user had to provide a value within 8-128, once completed an alert would trigger saying "great choice!" and the next phase of the function is allowed to commence.


 Next, I created some Confirms (true of false functions) and used these to filter through the user's desired character set for their password. At the end of the 4 confirms (uppercase, lowercase, numbers, symbols) if the user had said no to all of the selections, I enlisted yet another while loop encompassing all four confirms. This while loop is very similar to the last one save, the name of the new variable which was "select" given a value of false as well, and the if condition to provide the true value. 
     
If the user selects false for all four confirms they will be met with the alert "OOPS! Password MUST contain at least ONE character type!" and loop back to the first confirm but not to the password length selection. 
The condition this time was a little more complex due to the nature of the while loop encompassing many confirms. The way that I approached this problem was to state that if the ChosenCharacterArr (The variable containing the choices for selected characters.) number of arrays was changed from 0 to 1 || 2 || 3 || 4 then the loop may break.  

After this is all said and done, the for loop commences first taking into account the desired length of the password and adding one random character from the selected pool of chosen character arrays. This is accomplished by creating yet another variable called "randomCharacterType" which I made equal to Math.floor(Math.random() * chosenCharactersArr.length); which will randomly select one of the character types that the user selected. Next, I created another variable called randomCharacter and made it equal to Math.floor(Math.random() * chosenCharactersArr[randomCharacterType].length); which in essence does the same thing as last time but takes the randomly selected character type and selects a character from within that array at random. 

After this, I named a variable "Password" and made it equal to chosenCharactersArr[randomCharacterType][randomCharacter] and finally I made the variable passwordString='' equal to passwordstring += password which essentially pushes all the values of the for loop into one continuous string, ergo your new password with your selected characters and length! 

The final piece to the puzzle was to return the variable passwordString completing the "generatePassword" function with a closed curly bracket.

Once the passwordString is achieved the function to display the final password in the text box runs and the generator has done its job!

    thank you for reading.

    I hope you enjoyed my solution to creating a random password generator. 

    -Soleman Sayeed.