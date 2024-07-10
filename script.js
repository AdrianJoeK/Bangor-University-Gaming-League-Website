document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("bugl-logo");
    logo.addEventListener("mouseover", function() {
        logo.style.transform = "scale(1.1)";
    });
    logo.addEventListener("mouseout", function() {
        logo.style.transform = "scale(1.0)";
    });
});
