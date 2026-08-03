/* ==========================================
        PORTFOLIO JAVASCRIPT
        Shubham Kumar Shaw
========================================== */
window.addEventListener("load", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });
});

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
            NAVBAR HIDE
    ========================== */

    const navbar = document.querySelector(".navbar");

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const currentScroll = window.pageYOffset;

        if (currentScroll <= 20) {
            navbar.classList.remove("hide");
            lastScroll = currentScroll;
            return;
        }

        if (currentScroll > lastScroll) {
            navbar.classList.add("hide");
        } else {
            navbar.classList.remove("hide");
        }

        lastScroll = currentScroll;

    });

    /* ==========================
        SCROLL REVEAL
    ========================== */

    const revealElements = document.querySelectorAll(
        ".highlight-card, .project-card, .exp-card, .edu-card, .contact-card"
    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach((element) => {

        element.classList.add("hidden");

        observer.observe(element);

    });

    /* ==========================
        ACTIVE BUTTON RIPPLE
    ========================== */

    const buttons = document.querySelectorAll(
        ".buttons a, .project-links a"
    );

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.96)";

            setTimeout(() => {

                button.style.transform = "";

            }, 120);

        });

    });

    /* ==========================
        CURRENT YEAR
    ========================== */

    const year = new Date().getFullYear();

    document.querySelectorAll(".year").forEach((item) => {

        item.textContent = year;

    });

});