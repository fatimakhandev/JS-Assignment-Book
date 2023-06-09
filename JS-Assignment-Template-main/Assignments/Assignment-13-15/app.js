// ARRAYS
// Declare an empty array using JS literal notation to store
// student names in future
// var studNames = [];
//  Declare an empty array using JS object notation to store
// student names in future.
// var studNames = [];
// Declare and initialize a strings array.
// var studNames = ["sumera", "nisha", "mahrosh", "tooba", "safina"];
// Declare and initialize a numbers array.
// var studNames = [12, 34, 56, 78, 90];
// Declare and initialize a booleans array.
// var studNames = [true, false, true, false, true];
// Declare and initialize a mixed array.
// var studNames = ["sumera", 12, true, "nisha", 56, false];
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// var qualification = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil.",
//   "PhD",
// ];
// document.write("<h2>Qualification<?h2>");
// document.write("<ol>");
// for (var i = 0; i < qualification.length; i++) {
//   document.write("<li>" + qualification[i] + "</li>");
// }
// document.write("</ol>");
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students
// Student names array
// var studentNames = ["SUMERA", "NISHA", "MAHROSH"];

// // Scores array
// var scores = [20, 80, 90];

// // Calculate percentages
// var totalMarks = 100;
// var percentages = [];

// for (var i = 0; i < scores.length; i++) {
//   var percentage = (scores[i] / totalMarks) * 100;
//   percentages.push(percentage.toFixed(2)); // Round to 2 decimal places and add to percentages array
// }

// // Display scores and percentages
// var table = "<table>";
// table += "<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>";

// for (var i = 0; i < studentNames.length; i++) {
//   table += "<tr>";
//   table += "<td>" + studentNames[i] + "</td>";
//   table +=
//     "<td>" + "scores of " + studentNames[i] + " is " + scores[i] + "</td>";
//   table += "<td>" + percentages[i] + "%</td>";
//   table += "</tr>";
// }

// table += "</table>";

// // Display table in the HTML document
// document.getElementById("tableContainer").innerHTML = table;
// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Devare the first color in the array. Display the updated
// array in your browser.
// e. Devare the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to devare
// color(s) & how many colors he/she wants to devare. Then
// Arrays | JAVASCRIPT
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var colorNames = ["green", "grey", "black", "white"];
// // console.log(colorNames);
// var startColour = prompt(
//   "Which colour you want to add in the start of an array"
// );
// colorNames.unshift(startColour);
// // console.log(colorNames);
// var lastColour = prompt("Which colour you want to add in the last of an array");
// colorNames.push(lastColour);
// console.log(colorNames);
// colorNames.unshift("red", "yellow");
// console.log(colorNames);
// colorNames.shift();
// console.log(colorNames);
// var indexAdd = prompt("which index do you want to add a color");
// var colorAdd = prompt("which color do you want to add");
// colorNames.splice(indexAdd, 0, colorAdd);
// console.log(colorNames);
// var indexDel = prompt("which index do you want to devare");
// var colorDel = prompt("how many colors do you want to devare");
// colorNames.splice(indexDel, colorDel);
// console.log(colorNames);
// var scores = ["70", "89", 87, " 45"];
// var orderedScores = scores.sort();
// document.write("scores of students" + scores);
// document.write("<br>");
// document.write("ordered scores of students" + orderedScores);
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array
// var cities = ["karachi", "islamabad", "lahore"];
// var selectedCities = cities.slice(0, 2);
// console.log(selectedCities);
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method
// var arr = ["This ", "is", "my", "cat"];
// var join = arr.join();
// document.write("<h2>Array:</h2>");
// document.write(join);
// document.write("<h2>String:</h2>");
// var arr = ["This ", "is", "my", "cat"];
// var join = arr.join(" ");
// document.write(join);
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out
// var fifoArray = [];
// // console.log(fifoArray);
// fifoArray.push("Keyboard");
// // console.log(fifoArray);
// fifoArray.push("Mouse");
// // console.log(fifoArray);
// fifoArray.push("Printer");
// // console.log(fifoArray);
// fifoArray.push("Monitor");
// console.log(fifoArray);
// var join = fifoArray.join(",");
// document.write(join);
// var firstValue = fifoArray.shift();
// var secondValue = fifoArray.shift();
// var thirdValue = fifoArray.shift();
// var fourthValue = fifoArray.shift();
// document.write("<h2>Out:</h2>");
// document.write(firstValue);
// document.write("<h2>Out:</h2>");
// document.write(secondValue);
// document.write("<h2>Out:</h2>");
// document.write(thirdValue);
// document.write("<h2>Out:</h2>");
// document.write(fourthValue);
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (LAST- In First Out)
// var fifoArray = [];
// console.log(fifoArray);
// fifoArray.push("Keyboard");
// console.log(fifoArray);
// fifoArray.push("Mouse");
// console.log(fifoArray);
// fifoArray.push("Printer");
// console.log(fifoArray);
// fifoArray.push("Monitor");
// console.log(fifoArray);
// var join = fifoArray.join(",");
// document.write("<h2>Devices:</h2>");
// document.write(join);
// var firstValue = fifoArray.pop();
// var secondValue = fifoArray.pop();
// var thirdValue = fifoArray.pop();
// var fourthValue = fifoArray.pop();
// document.write("<h2>Out:</h2>");
// document.write(firstValue);
// document.write("<h2>Out:</h2>");
// document.write(secondValue);
// document.write("<h2>Out:</h2>");
// document.write(thirdValue);
// document.write("<h2>Out:</h2>");
// document.write(fourthValue);
// Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Redmi) in an array.
//   Display the following dropdown/select menu in your
//   browser using document.write() method
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Redmi"];
// document.write("<select>");
// for (var i = 0; i < phoneManufacturers.length; i++) {
//   document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");