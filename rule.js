function Verify() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
 if (username === "Madhu" && password === "Madhu@1996") {
  alert("Login Success full ")
  window.location ="https://www.youtube.com/"
  } 

  else{
      alert("Invalid username or password")
    }
}  

function Show(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

