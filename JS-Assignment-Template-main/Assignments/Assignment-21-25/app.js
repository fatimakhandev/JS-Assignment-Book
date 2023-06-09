// STRING METHODS
// var firstName = prompt("enter the first name");
// var lastName = prompt("enter the last name");
// var fullName = firstName + " " + lastName;
// document.write("welcome " + fullName);

// var fvrtMb = prompt("enter your fvrt mb model name");
// document.write("My Favorite phone is : " + fvrtMb);
// document.write("<br> Length of a string " + fvrtMb.length);
// var country = "Pakistan";
// document.write(country + "<br>");
// var string = "Hello World";
// document.write(string);
// document.write("<br> Index of 'l': " + string.lastIndexOf("l"));
// var word = "PAKISTANI";
// document.write("string : " + word);
// document.write("<br> Character at index : " + word.charAt(3));
// var newWord = word.document.write(newWord);
// var city = "Hyderabad";
// var replaceCity = city.replace("Hyder", "Islam");
// document.write("City : " + city);
// document.write("<br>  After replacement: " + replaceCity);
// var message =
//   "sumera and nisha are best friends. They play cricket and football together.";
// var andReplace = message.replace(/and/g, "&");
// document.write(andReplace);
// var string = "472";
// document.write("value : " + string);
// document.write("<br> type: " + typeof string);
// var num = parseInt(string);
// document.write("<br> value : " + num);
// document.write("<br> Type : " + typeof num);
// var userInput = prompt("ënter any input");
// var upperCase = userInput.toUpperCase();
//document.write("User input : "+userInput)
// document.write("<br> Upper case : "+upperCase);
// var userInput = prompt("ënter any input");
// document.write("User input :" + userInput);
// var titleCase = "";
// for (var i = 1; i <= 1; i++) {
//   var word = userInput[i].toLowerCase();
//   var upperCase = userInput.charAt(0).toUpperCase() + userInput.slice(1);
//   document.write("<br> Title case : " + upperCase);
// }
// var num = 35.36;
// var numString = num.toString().replace(".", "");
// document.write(num);
// document.write("<br>" + numString);
// var userName = prompt("Enter your username:");
// var specialSymbols = ["@", ".", ",", "!"];
// var isCheck = true;

// for (var i = 0; i < specialSymbols.length; i++) {
//   if (userName.includes(specialSymbols[i])) {
//     isCheck = false;
//     break;
//   }
// }

// if (isCheck) {
//   alert("Username accepted: " + userName);
// } else {
//   var newUsername = prompt(
//     "Please enter a valid username without any special symbols [@ . , !]"
//   );
//   isCheck = true;

//   for (var i = 0; i < specialSymbols.length; i++) {
//     if (newUsername.includes(specialSymbols[i])) {
//       isCheck = false;
//       break;
//     }
//   }

//   if (isCheck) {
//     alert("Username accepted: " + newUsername);
//   } else {
//     newUsername = prompt(
//       "Please enter a valid username without any special symbols [@ . , !]"
//     );
//     isCheck = true;

//     for (var i = 0; i < specialSymbols.length; i++) {
//       if (newUsername.includes(specialSymbols[i])) {
//         isCheck = false;
//         break;
//       }
//     }

//     if (isCheck) {
//       alert("Username accepted: " + newUsername);
//     } else {
//       alert("Invalid username entered multiple times. Please try again later.");
//     }
//   }
// }
// var username = prompt("Enter your username:");
// var specialSymbols = ["@", ".", ",", "!"];
// var isValid = true;

// for (var i = 0; i < specialSymbols.length; i++) {
//   if (username.includes(specialSymbols[i])) {
//     isValid = false;
//     break;
//   }
// }

// if (isValid) {
//   alert("Username accepted: " + username);
// } else {
//   var newUsername = prompt("Please enter a valid username without any special symbols [@ . , !]");
//   isValid = true;

//   for (var i = 0; i < specialSymbols.length; i++) {
//     if (newUsername.includes(specialSymbols[i])) {
//       isValid = false;
//       break;
//     }
//   }

//   if (isValid) {
//     alert("Username accepted: " + newUsername);
//   } else {
//     newUsername = prompt("Please enter a valid username without any special symbols [@ . , !]");
//     isValid = true;

//     for (var i = 0; i < specialSymbols.length; i++) {
//       if (newUsername.includes(specialSymbols[i])) {
//         isValid = false;
//         break;
//       }
//     }

//     if (isValid) {
//       alert("Username accepted: " + newUsername);
//     } else {
//       alert("Invalid username entered multiple times. Please try again later.");
//     }
//   }
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// var lowerInput = userInput.toLowerCase();
// var lowerItems = A.map(function (item) {
//   return item.toLowerCase();
// });
// var found = lowerItems.includes(lowerInput);
// if (found) {
//   console.log(userInput + " is found in the list.");
//   alert(userInput + " is found in the list.");
// } else {
//   console.log(userInput + " is not found in the list.");
//   alert(userInput + " is not found in the list.");
// }

// var password = prompt("Enter a password:");
// if (password.length < 6) {
//   alert("Invalid password! Password must be at least 6 characters long.");
// } else if (!isNaN(password.charAt(0))) {
//   alert("Invalid password! Password must not start with a number.");
// } else {
//   var hasAlphabet = false;
//   var hasNumber = false;

//   for (var i = 0; i < password.length; i++) {
//     var char = password.charAt(i);
//     if (/[a-zA-Z]/.test(char)) {
//       hasAlphabet = true;
//     } else if (/[0-9]/.test(char)) {
//       hasNumber = true;
//     }
//   }

//   if (!(hasAlphabet && hasNumber)) {
//     alert(
//       "Invalid password! Password must contain both alphabets and numbers."
//     );
//   } else {
//     alert("Valid password!");
//   }
// }
// var university = "University of Karachi";
// var letters = university.split("");
// for (var i = 0; i < letters.length; i++) {
//   document.write(university[i] + "<br>");
// }
// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// document.write(userInput);
// document.write("Last Character of input:", lastCharacter);
// var sentence = "The quick brown fox jumps over the lazy cat";

// var wordCount = "the";
// var lowerSentence = sentence.toLowerCase();

// var words = lowerSentence.split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === wordCount) {
//     count++;
//   }
// }
// var lowerSentence = sentence.toLowerCase();

// var words = lowerSentence.split(" ");
// document.write("text: " + sentence + "<br>");
// document.write("Occurrence(s) of the word 'the':", count);