document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Optional: Change burger icon to 'X' when menu is open
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Optional: Close menu when a link is clicked (for single-page sites)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.querySelector('i').classList.remove('fa-times');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    }


    // --- Sticky Header Styling (Optional Enhancement) ---
    const header = document.getElementById('header');
    if (header) {
        const stickyPoint = header.offsetTop + 10; // Point where header becomes "sticky" visually

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > stickyPoint) {
                header.classList.add('sticky-active'); // You might add styles for .sticky-active in CSS
            } else {
                header.classList.remove('sticky-active');
            }
        });
    }


    // --- Update Footer Year Dynamically ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Basic Portfolio Filtering Placeholder (if you add filter buttons) ---
    // Example: You'd need buttons with data-filter attributes in HTML
    // const filterButtons = document.querySelectorAll('.filter-buttons button');
    // const portfolioItems = document.querySelectorAll('.portfolio-item');
    //
    // filterButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         const filter = button.getAttribute('data-filter');
    //
    //         // Active button styling (optional)
    //         filterButtons.forEach(btn => btn.classList.remove('active'));
    //         button.classList.add('active');
    //
    //         portfolioItems.forEach(item => {
    //             const itemCategory = item.getAttribute('data-category'); // Add data-category="wedding", etc. to portfolio items in HTML
    //             if (filter === 'all' || filter === itemCategory) {
    //                 item.style.display = 'block'; // Or 'grid', 'flex', depending on layout
    //             } else {
    //                 item.style.display = 'none';
    //             }
    //         });
    //     });
    // });

    // --- Add More JS Interactivity Here ---
    // - Lightbox for portfolio images
    // - Form validation for a contact form
    // - Animations on scroll (using Intersection Observer API)

}); // End DOMContentLoaded