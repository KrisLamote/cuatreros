window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            // Add a class to highlight the current section in the navigation or apply other effects
            // For example, you can use the "active" class to highlight the current section in the navigation
            sections.forEach(function(s) {
                s.classList.remove("active");
            });
            section.classList.add("active");
        }
    });
});