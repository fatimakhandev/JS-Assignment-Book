// FUNCTION
// function displayDateTime() {
//   var currentDate = new Date();
//   var currentTime = currentDate.toLocaleTimeString();
//   document.write(currentDate + currentTime);
// }
// displayDateTime();
// function greet() {
//   var firstName = prompt("What is your first name?");
//   var lastName = prompt("What is your last name?");
//   var fullName = firstName + lastName;
//   document.write("Hello Wellcome " + fullName);
// }
// greet();
// function addNumbers() {
//   var num1 = parseInt(prompt("Enter first number:"));
//   var num2 = parseInt(prompt("Enter second number:"));
//   var sum = num1 + num2;
//   document.write("The sum of the two numbers is: " + sum);
// }
// addNumbers();
// function calculator(num1, num2, operator) {
//   var result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     case "%":
//       result = num1 % num2;
//       break;
//     default:
//       return "Invalid operator. Please enter a valid operator.";
//   }

//   return result;
// }
// var result = calculator(2, 4, "+");
// document.write(result);
// function square(num) {
//   return num * num;
// }
// var result = square(4);
// document.write(result);
// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
// var result = factorial(3);
// document.write(result);
// function countNums(start, end) {
//   for (var i = start; i <= end; i++) {
//     document.write(i + "<br>");
//   }
// }
// var result = countNums(1, 10);
// document.write(result);
// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(num) {
//     return num * num;
//   }
//   var hypotenuseSquared =
//     calculateSquare(base) + calculateSquare(perpendicular);

//   var hypotenuse = Math.sqrt(hypotenuseSquared);
//   return hypotenuse;
// }
// var hypotenuse = calculateHypotenuse(3, 4);
// document.write(hypotenuse);
// Approach 1: Arguments as value
// function calculateRectangleArea1(width, height) {
//   var area = width * height;
//   return area;
// }
// var area1 = calculateRectangleArea1(5, 10);
// console.log(area1); // Output: 50

// // Approach 2: Arguments as variables
// function calculateRectangleArea2(width, height) {
//   var area = width * height;
//   return area;
// }
// var width = 5;
// var height = 10;
// var area2 = calculateRectangleArea2(width, height);
// console.log(area2); // Output: 50
// function isPalindrome(str) {
//   var cleanedStr = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
//   var reversedStr = cleanedStr.split("").reverse().join("");
//   return cleanedStr === reversedStr;
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("Hi"));
// function capitalizeFirstLetters(str) {
//   var capitalizedWords = [];
//   var words = str.split(" ");

//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//     capitalizedWords.push(capitalizedWord);
//   }

//   var result = capitalizedWords.join(" ");
//   return result;
// }
// console.log(capitalizeFirstLetters("the quick brown fox"));
// function findLongestWord(str) {
//   var words = str.split(" ");
//   var longestWord = "";

//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord("Web Development Tutorial"));
// function countOccurrences(str, letter) {
//   var count = 0;

//   for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) === letter) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countOccurrences("JSResourceS.com", "o"));
// function calcArea(radius) {
//   var area = Math.PI * Math.pow(radius, 2);
//   console.log("The area is " + area);
// }