    function login() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
     if (username === "a" && password === "b") {
      alert("Login Success full ")
      window.location.assign("index.html");
      } 

      else{
          alert("Invalid username or password")
        }
    }  

   