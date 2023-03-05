const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
hamburger.addEventListener("click",() => {
    console.log("Humber Working....")
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})

document.querySelectorAll(".navbar ul li").forEach(n => n.addEventListener("click",() => {
    console.log("Working....")
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
}));
