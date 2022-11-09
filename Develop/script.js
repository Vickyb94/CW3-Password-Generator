// Assignment Code
var generateBtn = document.querySelector("#generate");

  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Array of characters 
var includeUppercaselist;
var includeLowercaselist;
var includeNumberlist;
var includeSymbollist;

var uppercaselist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberlist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbollist = ["!", "@", "#", "$", "%", "^", "&", "*"]

// function to generate password after clicking button
var generatePassword = function() {
  alert("Enter your password!" + "\n" + "Respond to the prompts that follow")

  var designateLength;
  
  designateLength = parseInt(prompt("How many characters would you like your password to be?" + "\n" + "Choose between 8 and 128 characters.")); {
    if (!designateLength || designateLength < 8 || designateLength > 128) {
      alert("Please enter a password  with at least 8 and no more than 128 characters. Try Again!");
      generatePassword();
    
  }

  else { 
    // Confirm various characters you would like in your password
    includeUppercaselist = confirm("Do you want Upper Case Letters (i.e. A, B, C) in your password?" +"\n" + "Click OK to add uppercase letters.");
    includelowercaselist = confirm("Do you want Lower Case Letters (i.e. a, b, c) in your password?" + "\n" + "Click OK to add lowercase letters.");
    includeNumberlist = confirm("Do you want Numbers (i.e. 1, 2, 3) in your password?" + "\n" + "Click OK to add numbers.");
    includeSymbollist = confirm("Do you want Symbols (i.e. !@#$%^&*) in your password?" + "\n" + "Click OK to add symbols.");
  };
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);