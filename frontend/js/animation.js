function slideIn(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "left 1.0s ease-in 0s";
    elem.style.left = "0px";
}

function slideOut(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "left 1.5s ease-out 0s";
    elem.style.left = "-400px";
}