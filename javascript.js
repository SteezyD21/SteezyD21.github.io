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

    if (navLinks.classList.contains("active")) {

        document.addEventListener('click', closeMenuOnClickDocument);
    } else {
        
        document.removeEventListener('click', closeMenuOnClickDocument);
    }
}

function closeMenuOnClickDocument(event) {
    var navLinks = document.getElementById("navLinks");
    var menuToggle = document.getElementById("menuToggle");
    if (!navLinks.contains(event.target) && event.target !== menuToggle) {
        navLinks.classList.remove("active");
    }
}
