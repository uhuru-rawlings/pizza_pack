const validate = () =>{
    var names = document.getElementById("username").value.trim();
    var usermail = document.getElementById("usermail").value.trim();
    var messages = document.getElementById("messages").value.trim();
    if(names === "" || usermail === "" || messages === ""){
        alert("please fill all fields");
        return false;
    }else{
        alert("Thanks for contacting us, a reply will be sent to your email");
        document.getElementById("username").value="";
        document.getElementById("usermail").value="";
        document.getElementById("messages").value="";
        return false;
    }
}