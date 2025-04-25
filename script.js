document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            // Close mobile menu when clicking a link
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu.classList.contains('block')) {
                mobileMenu.classList.remove('block');
                mobileMenu.classList.add('hidden');
            }
        });
    });
});
// Navbar background change on scroll
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.remove('bg-primary/90');
            nav.classList.add('bg-primary');
        } else {
            nav.classList.remove('bg-primary');
            nav.classList.add('bg-primary/90');
        }
    });
});
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = menuButton.querySelector('i');
    menuButton.addEventListener('click', function () {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('block');
            menuIcon.classList.remove('ri-menu-line');
            menuIcon.classList.add('ri-close-line');
        } else {
            mobileMenu.classList.remove('block');
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('ri-close-line');
            menuIcon.classList.add('ri-menu-line');
        }
    });
});