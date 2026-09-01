// Ambil semua skill
const skills = document.querySelectorAll(
    ".skill-list span, .soft-list span"
);


// Efek ketika mouse diarahkan ke skill

skills.forEach(skill => {

    skill.addEventListener("mouseenter", function () {

        this.style.transform = "scale(1.08)";
        this.style.transition = "0.3s";

    });


    skill.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});


// Efek klik pada nama Designer

const title = document.querySelector(".main-title h1");


title.addEventListener("click", function () {

    alert("Welcome to my design portfolio!");

});


// Animasi ketika halaman selesai dimuat

window.addEventListener("load", function () {

    document.querySelector(".container").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".container").style.transition = "opacity 1s";

        document.querySelector(".container").style.opacity = "1";

    }, 100);

});