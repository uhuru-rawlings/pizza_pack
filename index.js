const validates = () =>{
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
const validate = () =>{
    var namess = document.getElementById("usernames").value.trim();
    var messagess = document.getElementById("messagess").value.trim();
    if(namess === "" || messagess === ""){
        alert("please fill all fields");
        return false;
    }else{
        alert("Thanks for your comment");
        document.getElementById("usernames").value="";
        document.getElementById("messagess").value="";
        return false;
    }
}

$(document).ready(function(){
    $("#question1").click(function(){
        $("#answer1").toggle();
    });
});
$(document).ready(function(){
    $("#question2").click(function(){
        $("#answer2").toggle();
    });
});
$(document).ready(function(){
    $("#question3").click(function(){
        $("#answer3").toggle();
    });
});
$(document).ready(function(){
    $("#question4").click(function(){
        $("#answer4").toggle();
    });
});