
const themeBtn = document.getElementById("themeBtn");
const exploreBtn = document.getElementById("exploreBtn");
const message = document.getElementById("message");

// Light and dark theme
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌙 Dark Mode";
    } else {
        themeBtn.textContent = "☀️ Light Mode";
    }
});

// Explore button
exploreBtn.addEventListener("click", function () {
    message.textContent =
        "Welcome to DevSpace! Keep learning and keep building. 🚀";

    document.querySelector(".cards").scrollIntoView({
        behavior: "smooth"
    });
});
