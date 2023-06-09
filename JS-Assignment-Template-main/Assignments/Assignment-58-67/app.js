// DOM
var mainContent = document.getElementById("main-content");
console.log(mainContent.children);
var renderElements = document.querySelectorAll(".render");
renderElements.forEach(function (element) {
  console.log(element.innerHTML);
});
var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "Alex";
var lastNameInput = document.getElementById("last-name");
var emailInput = document.getElementById("email");
lastNameInput.value = "Bank";
emailInput.value = "faisalbank@example.com";
window.onload = function () {
  // i. What is the node type of the element with id "form-content"?
  var formContent = document.getElementById("form-content");
  var formContentType = formContent.nodeType;
  console.log("Node type of 'form-content': " + formContentType);

  // ii. Show the node type of the element with id "lastName" and its child nodes
  var lastNameElement = document.getElementById("lastName");
  var lastNameNodeType = lastNameElement.nodeType;
  var lastNameChildNodes = lastNameElement.childNodes;
  console.log("Node type of 'lastName': " + lastNameNodeType);
  console.log("Child nodes of 'lastName':", lastNameChildNodes);

  // iii. Update the child node of the element with id "lastName"
  lastNameElement.childNodes[0].nodeValue = "Updated Last Name";

  // iv. Get the first and last child of the element with id "main-content"
  var mainContentElement = document.getElementById("main-content");
  var firstChild = mainContentElement.firstChild;
  var lastChild = mainContentElement.lastChild;
  console.log("First child of 'main-content':", firstChild);
  console.log("Last child of 'main-content':", lastChild);

  // v. Get the next and previous siblings of the element with id "lastName"
  var lastNameSiblingNext = lastNameElement.nextSibling;
  var lastNameSiblingPrevious = lastNameElement.previousSibling;
  console.log("Next sibling of 'lastName':", lastNameSiblingNext);
  console.log("Previous sibling of 'lastName':", lastNameSiblingPrevious);

  // vi. Get the parent node and node type of the element with id "email"
  var emailElement = document.getElementById("email");
  var emailParentNode = emailElement.parentNode;
  var emailNodeType = emailElement.nodeType;
  console.log("Parent node of 'email':", emailParentNode);
  console.log("Node type of 'email':", emailNodeType);
};