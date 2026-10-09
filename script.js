
const themeBtn = document.getElementById("themeBtn");
const exploreBtn = document.getElementById("exploreBtn");
const message = document.getElementById("message");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeBtn.innerHTML = isLight
        ? `<svg viewBox="0 0 24 24" aria-hidden="true">
             <path d="M20 15.5A8 8 0 0 1 8.5 4
                      8 8 0 1 0 20 15.5Z"></path>
           </svg>`
        : `<svg viewBox="0 0 24 24" aria-hidden="true">
             <circle cx="12" cy="12" r="4"></circle>
             <path d="M12 2v2 M12 20v2 M2 12h2 M20 12h2"></path>
           </svg>`;
});

exploreBtn.addEventListener("click", () => {
    message.textContent =
        "I'm learning, experimenting, and building step by step.";

    document.getElementById("skills").scrollIntoView({
        behavior: "smooth"
    });
});
