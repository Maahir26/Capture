console.log("JSLOADED");

var allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
var profile = [];

var firstNameInput;
var lastNameInput;
var emailInput;
var usernameInput;
var passwordInput;
var userTypeInput = 0;

function save() {

  console.log("Btn click");
  
  firstNameInput = document.getElementById("first_name").value;
  lastNameInput = document.getElementById("last_name").value;
  emailInput = document.getElementById("email").value.toLowerCase();
  usernameInput = document.getElementById("username").value.toLowerCase();
  passwordInput = document.getElementById("password").value;
 