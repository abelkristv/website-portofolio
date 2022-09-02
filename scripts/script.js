header = document.querySelector("header")
content = document.getElementById("content")
form = document.getElementById('form')
project = document.getElementById("projects")
function display_form() {
    header.style.filter = "blur(8px)"
    content.style.filter = "blur(8px)"
    project.style.filter = "blur(8px)"
    form.style.display = "block"
    form.style.filter = "none"
    form.style.postion = "fixed"
}

function remove_form() {
    header.style.filter = "none"
    content.style.filter = "none"
    project.style.filter = "none" 
    form.style.display = "none"   
}

document.getElementById("contact").addEventListener("click", display_form)
document.getElementById("form-close").addEventListener("click", remove_form)
