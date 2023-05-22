let toggle = document.getElementById("nav-toggle");
let menu = document.getElementById("nav-list");
let close = document.getElementById("close");

toggle.onclick = function () {
    menu.classList.add("open");
}
close.onclick = function () {
    menu.classList.remove("open");
}

let up = document.querySelector(".arrow-up");
window.addEventListener("scroll", function () {
    if (this.scrollY >= 350) {
        up.classList.add("show-scroll");
    } else {
        up.classList.remove("show-scroll");
    }
})

let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
        header.classList.add("bg-header");
    } else {
        header.classList.remove("bg-header");
    }
})

let sections = document.querySelectorAll("section[id]");
const scrollActive = function () {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop,
              sectionId = current.getAttribute("id"),
              sectionClass = document.querySelector(".nav-menu a[href*=" + sectionId)
              if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionClass.classList.add("active");
              } else {
                sectionClass.classList.remove("active");
              }

    })
}

window.addEventListener("scroll", scrollActive);


let mode = document.querySelector(".nav-mode");
let iconTheme = document.querySelector(".moon");
let iconMode = "fa-solid fa-gear";
let body = document.querySelector("body");
mode.addEventListener("click", function () {
    body.classList.toggle("dark");
})


let sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: "400",
    // reset: "true",
})

sr.reveal(".home-img, .news .container, .footer")
sr.reveal(".home-info", {origin: "bottom"})
sr.reveal(".about-info, .recent-info", {origin: "left"})
sr.reveal(".about-img, .recent-img", {origin: "right"})