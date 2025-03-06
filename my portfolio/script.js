/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("click", function() {
            alert(`You clicked on: ${this.querySelector("h3").textContent}`);
        });
    });

    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#0056b3";
        } else {
            header.style.backgroundColor = "#007bff";
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Toggle details for education section
    document.querySelectorAll(".education div").forEach(item => {
        item.addEventListener("click", function() {
            this.classList.toggle("expanded");
            this.style.backgroundColor = this.classList.contains("expanded") ? "#e3f2fd" : "#f9f9f9";
        });
    });

    // Add hover effects dynamically
    const elements = document.querySelectorAll(".project, .school, .college");
    elements.forEach(element => {
        element.addEventListener("mouseenter", function() {
            this.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        });
        element.addEventListener("mouseleave", function() {
            this.style.boxShadow = "none";
        });
    });
});
