// import "./jquery-3.6.1-min"

// let header = document.querySelector("header")
// let content = document.getElementById("content")
// let form = document.getElementById('form')
// let project = document.getElementById("projects")
// let main = document.querySelector("main")
// console.log(main.innerHTML)

// let navbar = document.querySelector("nav")

// function sticky() {
//     if (window.scrollY > navbar.offsetTop) {
//         navbar.style.position = "fixed"
//     } else {
//         navbar.style.position = "static"        
//     }
// }

// function display_form() {
//     // header.style.filter = "blur(8px)"
//     navbar.style.filter = "blur(8px)"
//     navbar.style.zIndex = 10
//     content.style.filter = "blur(8px)"
//     project.style.filter = "blur(8px)"
//     form.style.display = "block"
//     form.style.filter = "none"
//     form.style.postion = "fixed"
// }

// function remove_form() {
//     header.style.filter = "none"
//     content.style.filter = "none"
//     project.style.filter = "none" 
//     form.style.display = "none"   
//     navbar.style.filter = "none"
// }

// document.getElementById("contact").addEventListener("click", display_form)
// document.getElementById("form-close").addEventListener("click", remove_form)
// // window.onscroll = sticky

$(document).ready(function(){
    $("#contact").click(function(){
        $("#form").fadeIn()
        $("main").css("filter", "blur(8px)")
    })
    $("#form-close").click(function(){
        $("#form").fadeOut()
        $("main").css("filter", "none")
    })
})