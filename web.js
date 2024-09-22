
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener("scroll", () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

var typingEffects = new Typed(".typedText", {
    strings: ["Developer", "Amazon VA"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});


// Dark Mode


let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}


const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".social_icons", {});
sr.reveal(".featured-name", { delay: 200 });
sr.reveal(".hello", { delay: 200 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-image", { delay: 200 });
sr.reveal(".heading", { delay: 200 });
sr.reveal(".services-content", { interval: 200 });

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-container", { delay: 200 });
srLeft.reveal(".contact-form", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".portfolio-content", { delay: 200 });
srRight.reveal(".skill", { delay: 200 });
