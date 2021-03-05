// Javascript

var bookmark = document.querySelector("#bookmark");
var checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("click", changeColor, false)

function changeColor() {
    if (checkbox.checked == true) {
        return bookmark.style.background = "hsl(176, 50%, 47%)";
    }   else {
        return bookmark.style.background = "hsl(0, 0%, 48%)";
    }
}


