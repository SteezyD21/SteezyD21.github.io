function darkMode() {
    const elements = document.querySelectorAll(".dark-mode");
    elements.forEach(element => {
        element.classList.toggle("dark");
    });
    
}
// Function to toggle the dropdown menu
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
