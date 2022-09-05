import {writeUserData} from "./firebaseConfig.js"

$(document).ready(function(){
    $("#contact").click(function(){
        $("#form").fadeIn()
        $("main").css("filter", "blur(8px)")
    })
    $("#form-close").click(function(){
        $("#form").fadeOut()
        $("main").css("filter", "none")
    })
});

document.addEventListener("submit", function(event) {
    event.preventDefault()
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone-num").value;
    let message = document.getElementById("message").value;

    writeUserData(name,email,phoneNumber,message);
    $("#submit").click(function(){
        $("#form").fadeOut()
        $("main").css("filter", "none")
    })
})