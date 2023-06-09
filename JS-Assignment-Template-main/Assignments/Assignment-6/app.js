// MATH EXPRESSIONS
// var a = 1;
// document.write("The value of a is " + a + "<br>");
// var inc = ++a;
// document.write("The value of a is " + inc + "<br>");
// var inc2 = a++;
// document.write("The value of a is " + inc2 + "<br>");
// var dec = --a;
// document.write("The value of a is " + dec + "<br>");
// var dec2 = a--;
// document.write("The value of a is " + dec2 + "<br>");
// var lasta = (a -= 1);
// document.write("The value of a is " + lasta + "<br>");
// var a = 2,
//   b = 1;
// var result = --a - --b + ++b + b--;
// document.write(result);
// --a; //1
// --a - --b; //1
// --a - --b + ++b; //2
// --a - --b + ++b + b--; //3
// var userName = prompt("What is your name?");
// alert("Hello, " + userName + "! Nice to meet you.");
// var num = +prompt("Enter a number to display its multiplication table:");
// if (num === "" || isNaN(num)) {
//   num = 5;
// }

// var table = "<h2>Multiplication Table of " + num + "</h2>";
// for (var i = 1; i <= 10; i++) {
//   table += num + " x " + i + " = " + num * i + "<br>";
// }

// document.write(table);

/// Part a: Take three subjects' names from the user and store them in different variables
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// // Part b: Store the total marks for each subject in a variable
// var totalMarks = 100;

// // Part c: Take obtained marks for the first subject from the user and store it in a variable
// var obtainedMarks1 = parseInt(
//   prompt("Enter the obtained marks for " + subject1 + ":")
// );

// // Part d: Take obtained marks for the remaining 2 subjects from the user and store them in variables
// var obtainedMarks2 = parseInt(
//   prompt("Enter the obtained marks for " + subject2 + ":")
// );
// var obtainedMarks3 = parseInt(
//   prompt("Enter the obtained marks for " + subject3 + ":")
// );

// // Part e: Calculate total marks and percentage, and display the result in a table format in the browser
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
// // Display the result in a table format
// document.write("<table>");
// document.write(
//   "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>"
// );
// document.write(
//   "<tr><td>" +
//     subject1 +
//     "</td><td>" +
//     totalMarks +
//     "</td><td>" +
//     obtainedMarks1 +
//     "</td></tr>"
// );
// document.write(
//   "<tr><td>" +
//     subject2 +
//     "</td><td>" +
//     totalMarks +
//     "</td><td>" +
//     obtainedMarks2 +
//     "</td></tr>"
// );
// document.write(
//   "<tr><td>" +
//     subject3 +
//     "</td><td>" +
//     totalMarks +
//     "</td><td>" +
//     obtainedMarks3 +
//     "</td></tr>"
// );
// document.write(
//   "<tr><th>Total</th><th>" +
//     totalMarks * 3 +
//     "</th><th>" +
//     totalObtainedMarks +
//     "</th></tr>"
// );
// document.write("</table>");
// document.write("<p>Percentage: " + percentage + "%</p>");