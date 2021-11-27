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
        if($("#plus1").html() == "+"){
            $("#plus1").html("-");
        }else{
            $("#plus1").html("+");
        }
    });
});
$(document).ready(function(){
    $("#question2").click(function(){
        $("#answer2").toggle();
        if($("#plus2").html() == "+"){
            $("#plus2").html("-");
        }else{
            $("#plus2").html("+");
        }
    });
});
$(document).ready(function(){
    $("#question3").click(function(){
        $("#answer3").toggle();
        if($("#plus3").html() == "+"){
            $("#plus3").html("-");
        }else{
            $("#plus3").html("+");
        }
    });
});
$(document).ready(function(){
    $("#question4").click(function(){
        $("#answer4").toggle();
        if($("#plus4").html() == "+"){
            $("#plus4").html("-");
        }else{
            $("#plus4").html("+");
        }
    });
});