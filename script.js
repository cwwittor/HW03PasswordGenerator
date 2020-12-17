// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lengthOfPassword = null;
  var lowercase = false;
  var uppercase = false;
  var numeric = false;
  var special = false;
  var selectedType = false; //The user has selected a password character type if false

  //strings that will be used for iterating later for password generation
  var lowercaseString = "abcdefghijlmnopqrstuvwxyz";
  var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericString = "1234567890";
  var specialString = " !" + '"' + "#" + "$" + "%" + "&" + "'" + "(" + ")" + "*" + "+" + "," + "-" + "." + "/" + ":" + ";" + "<" + "=" + ">" + "?" + "@" + "[" + "\\" + "]" + "^" + "_`{|}~";
  var totalString = "";

  //while loop that will ask the user for the length of the password they would want
  while (lengthOfPassword == null)  {
    var attemptedLengthOfPassword = prompt("What length of password would you like?(8 Character minimum, 128 character maximum");

    if (attemptedLengthOfPassword >= 8 && attemptedLengthOfPassword <= 128) {
      lengthOfPassword = attemptedLengthOfPassword;
    } else if (attemptedLengthOfPassword < 8 || attemptedLengthOfPassword > 128) {
      alert("This is outside of the specified bounds. Please select a new value that is greater than 8 and less than 128.");
    } else {
      alert("This is an incorrect data type.");
    }
  }

  //while loop used for making sure the user picks one of the types of characters in their password
  while (selectedType == false)  {
    lowercase = confirm("You want lowercase characters in your password? (select OK if yes, and cancel if no)");
    uppercase = confirm("You want uppercase characters in your password? (select OK if yes, and cancel if no)");
    numeric = confirm("You want numbers in your password? (select OK if yes, and cancel if no)");
    special = confirm("You want special characters in your password? (select OK if yes, and cancel if no)");
    if (lowercase == true || uppercase == true || numeric == true || special == true) {
      selectedType = true;
    } else {
      alert("You need to say OK to one of the following options");
    }
  }

  //checks the user password if it will include any of the following characters
  if (lowercase == true)  {
    totalString += lowercaseString;
  }
  if (uppercase == true)  {
    totalString += uppercaseString;
  }
  if (numeric == true)  {
    totalString += numericString;
  }
  if (special == true)  {
    totalString += specialString;
  }

  var newPassword = ""; //sets the variable for new password blank so I can add to it in the loop

  //loop for making the new password
  for (var x = 0; x < lengthOfPassword; x++)  {
    var newChar = totalString.charAt(Math.floor(Math.random() * totalString.length) + 1);
    newPassword += newChar;
  }
 
  return newPassword




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
