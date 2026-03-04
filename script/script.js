document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector("#hamburger-btn");
    const navMenu = document.querySelector("#nav-menu");

    // Deschide/Închide meniul
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        
        // Opțional: Animație de tip "X" pentru hamburger
        hamburger.classList.toggle("is-active");
    });

    // Închide meniul când dai click pe un link (pentru single page navigation)
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(n => n.addEventListener("click", () => {
        navMenu.classList.remove("active");
    }));
});