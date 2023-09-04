const users = {"a":"b"}

function Madhu(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(users[username]==password){
        alert("login succesful")
        window.location="login.html"
    }
    else{
        alert("please enter username and password currently")
    }
    
}


  