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

function check(object, type){
    if (object.length === 0) {
        let warn = document.getElementById(type + "-warn")
        warn.style.display = "block"
        warn.innerHTML = "Please enter this field"
    } else if (type == "email") {
        if (object.search('@') == -1) {
            let warn = document.getElementById("email-warn")
            warn.style.display = "block"
            warn.innerHTML = "Please enter email with correct format, ex: john@gmail.com"
        }        
    } else if (type == "phone-num") {
        if (object.length > 14) {
            let warn = document.getElementById("phone-num-warn")
            warn.style.display = "block"
            console.log(Number(object))
            warn.innerHTML = "Phone number must not exceed 14 digit"            
        } else if (isNaN(Number(object)) == true) {
            console.log(Number(object))
            let warn = document.getElementById("phone-num-warn")
            warn.style.display = "block"
            warn.innerHTML = "Phone number must only contain number character"            
        } else if (object[0] != '0' || object[1] != '8') {
            let warn = document.getElementById("phone-num-warn")
            warn.style.display = "block"
            warn.innerHTML = "Phone number must start with 08"   
        }
    } else {
        return 1
    }
}

document.addEventListener("submit", function(event) {
    event.preventDefault()
    let safe = 0;
    let warning = document.querySelectorAll("form > p");
    for (let i = 0; i < warning.length; i++) {
        warning[i].style.display = "none";
    }
    let name = document.getElementById("name").value;
    safe = check(name, "name")
    let email = document.getElementById("email").value;
    safe = check(email, "email")
    let phoneNumber = document.getElementById("phone-num").value;
    safe = check(phoneNumber, "phone-num")
    let message = document.getElementById("message").value;
    safe = check(message, "message")
    if (safe === 0) {
        return
    }

    writeUserData(name,email,phoneNumber,message);
    $("#submit").click(function(){
        console.log("asd")
        $("#form").fadeOut()
        $("main").css("filter", "none")
    })
})