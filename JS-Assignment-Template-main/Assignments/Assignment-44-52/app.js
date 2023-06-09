// EVENTS
// var signupForm = document.getElementById("signupForm");
// var submittedData = document.getElementById("submittedData");

// signupForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   var name = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var formData = document.createElement("p");
//   formData.textContent =
//  "Name: " + name + "Email: " + email + "Password: " + password;

//   submittedData.appendChild(formData);
//   signupForm.reset();
// });
// var readMoreButtons = document.querySelectorAll(".read-more");
// readMoreButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     var item = button.parentNode;
//     var details = item.querySelector(".details");
//     var summary = item.querySelector(".summary");

//     if (details.style.display === "none") {
//       details.style.display = "block";
//       button.textContent = "Read less";
//     } else {
//       details.style.display = "none";
//       button.textContent = "Read more";
//     }
//   });
// });