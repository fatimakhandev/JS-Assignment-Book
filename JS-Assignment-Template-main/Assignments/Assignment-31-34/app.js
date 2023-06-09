//DATE METHODS
// var currentDate = new Date();
// var dateTime = currentDate.toString();
// document.write(currentDate);
// Get the current date
// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();
// var monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var currentMonthName = monthNames[currentMonth];
// document.write("Current Month: " + currentMonthName);
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var dayLetters = days[currentDay].slice(0, 3);
// document.write("Today is " + dayLetters);
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if (currentDay === 0 || currentDay === 6) {
//   document.write("Its fun day");
// } else {
//   document.write("Its not fun day");
// }
// var today = new Date();
// var currentDay = today.getDay();
// if (currentDay < 16) {
//   document.write("First fifteen days of month");
// } else {
//   document.write("Last days of month");
// }

// var currentDate = new Date();
// var startDate = new Date("Jan 1, 1970");
// var elapsedMilliseconds = currentDate.getTime() - startDate.getTime();
// document.write(currentDate + "<br>");
// document.write("Elapsed milliseconds since January" + elapsedMilliseconds);
// var elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));
// document.write("<br> Elapsed minutes since January" + elapsedMinutes);
// var currentTime = new Date();
// var currentHour = currentTime.getHours();
// var period;
// if (currentHour < 12) {
//   period = "AM";
// } else {
//   period = "PM";
// // }
// // document.write("It's " + period);
// var laterDate = new Date(2020, 11, 0);
// document.write("Later Date : " + laterDate);
// var startingDate = new Date("June 18, 2015");
// var today = new Date();
// var timeDiff = Math.abs(today.getTime() - startingDate.getTime());
// var daysPassed = Math.round(timeDiff / (1000 * 60 * 60 * 24));
// document.write(daysPassed + " days have  passed since 1st Ramadan , 2015");
// var referenceDate = new Date("Dec 5, 2015"); // Use your desired reference date here
// var beginningOf2015 = new Date("January 1, 2015");
// var timeDiff = Math.abs(beginningOf2015.getTime() - referenceDate.getTime());
// var secondsElapsed = Math.floor(timeDiff / 1000);
// document.write(
//   "On reference date " +
//     referenceDate +
//     "Seconds had  passed since the beginning of 2015: " +
//     secondsElapsed
// );
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// var currentTime = currentDate.toLocaleTimeString();
// document.write(
//   "Current date : " + currentDate + "<br>1 hour ago, it was " + currentTime
// );
// var currentDate = new Date();
// var year = currentDate.getFullYear();
// document.write(year);
// var yearBack = year - 100;
// document.write(
//   "Current date : " + currentDate + "<br>100 years back, it was " + yearBack
// );
// var age = +prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("Your age is: " + age);
// document.write("<br> Your birth year is: " + birthYear);
// Input variables
// var customerName = prompt("Enter customer name:");
// var currentMonth = prompt("Enter current month:");
// var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var latePaymentSurcharge = netAmountPayable * (latePaymentSurcharge / 100);
// var grossAmountPayable =
//   parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge);
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: " + customerName);
// document.write("Current Month: " + currentMonth);
// document.write("Number of Units:" + numberOfUnits);
// document.write("Charges per Unit:" + chargesPerUnit);
// document.write("Net Amount Payable (within Due Date):" + netAmountPayable);
// document.write("Late Payment Surcharge:" + latePaymentSurcharge);
// document.write("Gross Amount Payable (after Due Date):" + grossAmountPayable);