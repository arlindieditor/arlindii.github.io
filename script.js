// Change navbar color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Navbar Toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close navbar if clicked outside (for mobile)
document.addEventListener('click', function(e) {
    if (!hamburgerBtn.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
        const targetElement = document.getElementById(targetId);

        // Scroll to the target element
        window.scrollTo({
            top: targetElement.offsetTop - navbar.offsetHeight, // Offset for navbar height
            behavior: 'smooth'
        });
    });
});
