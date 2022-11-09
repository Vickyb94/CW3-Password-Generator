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

var Uppercaselist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Lowercaselist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Numberlist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var Symbollist = ["!", "@", "#", "$", "%", "^", "&", "*"]

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
    includeUppercaselist = confirm("Do you want Uppercase Letters (i.e. A, B, C) in your password?" +"\n" + "Click OK to add uppercase letters.");
    includeLowercaselist = confirm("Do you want Lowercase Letters (i.e. a, b, c) in your password?" + "\n" + "Click OK to add lowercase letters.");
    includeNumberlist = confirm("Do you want Numbers (i.e. 1, 2, 3) in your password?" + "\n" + "Click OK to add numbers.");
    includeSymbollist = confirm("Do you want Symbols (i.e. !@#$%^&*) in your password?" + "\n" + "Click OK to add symbols.");
  };

  var choices;

 // Choice made when all four character types are chosen (boolean if this is true)
 if (includeUppercaselist && includeLowercaselist && includeNumberlist && includeSymbollist) {
  var choices = Uppercaselist.concat(Lowercaselist, Numberlist, Symbollist);
}

// If none of the character types are chosen (boolean if this is true)
else if (!includeUppercaselist && !includeLowercaselist && !includeNumberlist && !includeSymbollist) {
  choices = alert("Please choose at least one criteria!")
}

//If only one character type is chosen
else if (includeUppercaselist) {
  var choices = Uppercaselist
}
else if (includeLowercaselist) {
  var choices = Lowercaselist
}
else if (includeNumberlist) {
  var choices = Numberlist
}
else if (includeSymbollist) {
  var choices = Symbollist
}

// If just two character types are chosen
else if (includeUppercaselist && includeLowercaselist) {
  var choices = Uppercaselist.concat(Lowercaselist)
}
else if (includeUppercaselist && includeNumberlist) {
  var choices = Uppercaselist.concat(Numberlist)
}
else if (includeUppercaselist && includeSymbollist) {
  var choices = Uppercaselist.concat(Symbollist)
}
else if (includeLowercaselist && includeNumberlist) {
  var choices = Lowercaselist.concat(Numberlist)
}
else if (includeLowercaselist && includeSymbollist) {
  var choices = Lowercaselist.concat(Symbollist)
}
else if (includeNumberlist && includeSymbollist) {
  var choices = Numberlist.concat(Symbollist)
}

 // If three character types are chosen
 else if (includeUppercaselist && includeLowercaselist && includeNumberlist) {
  var choices = Uppercaselist.concat(Lowercaselist, Numberlist)
}
else if (includeUppercaselist && includeLowercaselist && includeSymbollist) {
  var choices = Uppercaselist.concat(Lowercaselist, Symbollist)
}
else if (includeUppercaselist && includeSymbollist && includeNumberlist) {
  var choices = Uppercaselist.concat(Symbollist, Numberlist)
}
else if (includeSymbollist && includeLowercaselist && includeNumberlist) {
  var choices = Symbollist.concat(Lowercaselist, Numberlist)
}
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);