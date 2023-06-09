// calcArea(5);
// FUNCTIONS, SWITCH
// STATEMENTS, WHILE… DOWHILE LOOPS
// function power(a, b) {
//   return Math.pow(a, b);
// }
// console.log(power(2, 4));
// function leapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(leapYear(2023));
// function triangleArea(a, b, c) {
//   var s = (a + b + c) / 2;
//   var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }
// console.log(triangleArea(3, 4, 5));
// function calculateAverage(subject1, subject2, subject3) {
//   var average = (subject1 + subject2 + subject3) / 3;
//   return average;
// }

// function calculatePercentage(subject1, subject2, subject3) {
//   var totalMarks = 300;
//   var obtainedMarks = subject1 + subject2 + subject3;
//   var percentage = (obtainedMarks / totalMarks) * 100;
//   return percentage;
// }

// function mainFunction(subject1, subject2, subject3) {
//   var average = calculateAverage(subject1, subject2, subject3);
//   var percentage = calculatePercentage(subject1, subject2, subject3);

//   console.log("Average marks: " + average.toFixed(1));
//   console.log("Percentage: " + percentage.toFixed(1) + "%");
// }
// mainFunction(80, 75, 90);
// function indexOf(string, searchChar) {
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === searchChar) {
//       return i;
//     }
//   }
//     }
//   }
//   return -1;
// }
// console.log(indexOf("word", "o"));
// function delVowels(sen) {
//   var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   var result = "";

//   for (var i = 0; i < sen.length; i++) {
//     var char = sen[i];
//     if (!vowels.includes(char)) {
//       result += char;
//     }
//   }

//   return result;
// }

// console.log(delVowels("Hi I am Fatima"));
// function countVowels(text) {
//   var vowels = "aeiouAEIOU";
//   var count = 0;

//   for (var i = 0; i < text.length - 1; i++) {
//     var char = text[i];
//     var nextChar = text[i + 1];

//     if (vowels.includes(char) && vowels.includes(nextChar)) {
//       switch (char + nextChar) {
//         case "ea":
//         case "EA":
//         case "ei":
//         case "EI":
//         case "eu":
//         case "EU":
//         case "io":
//         case "IO":
//         case "ia":
//         case "IA":
//         case "ou":
//         case "OU":
//           count++;
//           break;
//         default:
//           break;
//       }
//     }
//   }

//   return count;
// }
// console.log(countVowels("Hi Fatima"));
// function convertMeters(distanceKm) {
//   return distanceKm * 1000;
// }

// function convertFeet(distanceKm) {
//   return distanceKm * 3280.84;
// }

// function convertInches(distanceKm) {
//   return distanceKm * 39370.1;
// }

// function convertCentimeters(distanceKm) {
//   return distanceKm * 100000;
// }

// function distanceConversions(distanceKm) {
//   var distanceMeters = convertMeters(distanceKm);
//   var distanceFeet = convertFeet(distanceKm);
//   var distanceInches = convertInches(distanceKm);

//   console.log("Distance in Meters: " + distanceMeters);
//   console.log("Distance in Feet: " + distanceFeet);
//   console.log("Distance in Inches: " + distanceInches);
//   console.log("Distance in Centimeters: " + distanceCentimeters);
// }

// var distance = 100;
// console.log(distanceConversions(distance));
// function overtimePay(hoursWorked) {
//   var regularHours = 40;
//   var overtimeRate = 12.0;

//   if (hoursWorked <= regularHours) {
//     return 0;
//   } else {
//     var overtimeHours = hoursWorked - regularHours;
//     var overtimePay = overtimeHours * overtimeRate;
//     return overtimePay;
//   }
// }
// var hours = 45;
// var overtimePay = overtimePay(hours);
// // console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));
// function calculateCurrencyNotes(amount) {
//   var denomination100 = Math.floor(amount);
//   var denomination50 = 0;
//   var denomination10 = 0;

//   if (amount % 1 !== 0) {
//     return "Invalid input. Amount should be in whole hundreds.";
//   }

//   if (denomination100 >= 5) {
//     denomination50 = Math.floor(denomination100 / 2);
//     denomination100 = denomination100 % 2;
//   }

//   if (denomination50 >= 2) {
//     denomination10 = Math.floor(denomination50 / 5);
//     denomination50 = denomination50 % 5;
//   }

//   return {
//     100: denomination100,
//     50: denomination50,
//     10: denomination10,
//   };
// }

// var amount = prompt("Enter the  amount to withdraw!!");
// var parsedAmount = parseInt(amount);

// if (!isNaN(parsedAmount)) {
//   var currencyNotes = calculateCurrencyNotes(parsedAmount);
//   var result = "Currency Notes:\n\n";
//   result += "100: " + currencyNotes[100] + " notes\n";
//   result += "50: " + currencyNotes[50] + " notes\n";
//   result += "10: " + currencyNotes[10] + " notes\n";

//   document.write(result);
// } else {
//   alert("Invalid input. Please enter a valid number.");
// }