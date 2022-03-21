console.log("JSLOADED");
var usernameLogin, passwordLogin;

function cat() {
  
  console.log("btn click");
  
  usernameLogin = document.getElementById('userName').value.toLowerCase();
  passwordLogin = document.getElementById('passWord').value;
  usernameCheck = JSON.parse(localStorage.getItem(usernameLogin + "Profile"));
  
  if (usernameLogin == usernameCheck[3] && passwordLogin == usernameCheck[4]) {
    
    alert("Login successful");
    
  } else {
    
    alert("Try again")
    
  }
  
}