// IF…ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase varter or lower case varter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// var input = "Amazing";

// if (typeof input === "number") {
//   console.log("Input is a number");
// } else if (typeof input === "string") {
//   var charCode = input.charCodeAt(0);
//   if (charCode >= 65 && charCode <= 90) {
//     console.log("Input is an uppercase varter");
//   } else if (charCode >= 97 && charCode <= 122) {
//     console.log("Input is a lowercase varter");
//   } else {
//     console.log("Input is not a varter");
//   }
// } else {
//   console.log("Invalid input");
// }
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 > num2) {
//   console.log("The larger number is: " + num1);
// } else if (num2 > num1) {
//   console.log("The larger number is: " + num2);
// } else {
//   console.log("Both numbers are equal.");
// }
// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// var number = parseInt(prompt("Enter a number:"));

// if (number > 0) {
//   console.log("The number is positive.");
// } else if (number < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }
// . Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
// s
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise
// var correctPassword = "1234"; // Store the correct password

// var userPassword = prompt("Enter your password:"); // enter password

// if (!userPassword) {
//   console.log("Please enter your password."); // Check if user has entered a password
// } else if (userPassword == correctPassword) {
//   console.log(
//     "Correct! The password you entered matches the original password."
//   ); // Check if passwords match
// } else {
//   console.log("Incorrect password."); // Incorrect password
// }
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   console.log((greeting = "Good day"));
// } else {
//   console.log((greeting = "Good evening"));
// }
// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// var time = parseInt(
//   prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7 PM):")
// );

// if (time >= 0 && time < 1200) {
//   console.log("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//   console.log("Good afternoon!");
// } else if (time >= 1700 && time < 2000) {
//   console.log("Good evening!");
// } else if (time >= 2000 && time <= 2359) {
//   console.log("Good night!");
// } else {
//   console.log("Invalid time format entered!");
// }