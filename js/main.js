window.addEventListener("load", function() {
    takeElement()
})

function takeElement() {
    var title = document.getElementsByClassName("card-title")
    for (var i = 0; i < title.length; i++) {
        var text = title[i].innerHTML
        var newTitle = setText(text, 35)
        title[i].innerHTML = newTitle
    }
}

function setText(index, final) {
    if (index.length > final) {
        return index.slice(0, final) + "...";
    } else {
        return;
    }
}

var takeElements = document.getElementById("sidebarCollapse")
var wrapper = document.getElementById("wrapper")
var overlay = document.getElementById("overlay")
var dismit = document.getElementById("dismiss")
takeElements.onclick = function() {
    wrapper.classList.toggle("show");
    overlay.style.display = "block";
}
dismit.onclick = function() {
    wrapper.classList.toggle("show");
    overlay.style.display = "none";
}
overlay.onclick = function() {
    wrapper.classList.toggle("show");
    overlay.style.display = "none";
}

/* Sidebar Mini */
var toogle = document.querySelector('.sidaBarMini__button')
var sidebarMini = document.querySelector('.sideBarMini')
var witch = document.querySelector('#checkbox')

toogle.addEventListener('click', function() {
    sidebarMini.classList.toggle('is-open')
})
witch.addEventListener('click', function() {
    document.querySelector('body').classList.toggle('darkMode')
})