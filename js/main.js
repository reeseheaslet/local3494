/**
 * main.js
 * Main JavaScript file for the Davis Professional Firefighters website
 * Handles animations, interactions, and responsive behavior
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }

    // Dropdown Menu in Mobile View
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener('click', function(e) {
            // Only handle this in mobile view
            if (window.innerWidth < 1024) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Tabs Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const tabContents = document.querySelectorAll('.tab-content');
            const tabs = document.querySelectorAll('.tab-btn');
            
            // Remove active class from all tabs and contents
            tabs.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Don't interfere with dropdown toggle on mobile
            if (this.parentElement.classList.contains('dropdown') && window.innerWidth < 1024) {
                return;
            }
            
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
                
                // Scroll to element
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        
        // Toggle scroll-to-top button visibility
        const scrollTopButton = document.getElementById('scrollTop');
        if (scrollTopButton) {
            if (scrollTop > 600) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        }
    });
    
    // Scroll to top button functionality
    const scrollTopButton = document.getElementById('scrollTop');
    if (scrollTopButton) {
        scrollTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (!name.value.trim()) {
                isValid = false;
                name.classList.add('error');
            } else {
                name.classList.remove('error');
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                isValid = false;
                email.classList.add('error');
            } else {
                email.classList.remove('error');
            }
            
            if (!message.value.trim()) {
                isValid = false;
                message.classList.add('error');
            } else {
                message.classList.remove('error');
            }
            
            if (isValid) {
                // For now, just show a success message
                // In a real implementation, this would send data to a server
                const formFields = contactForm.querySelectorAll('input, textarea, select');
                const successMessage = document.createElement('div');
                
                successMessage.classList.add('success-message');
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                
                contactForm.reset();
                contactForm.appendChild(successMessage);
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }

    // Login Form (Placeholder functionality)
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username');
            const password = document.getElementById('password');
            
            if (!username.value.trim() || !password.value.trim()) {
                alert('Please enter both username and password.');
                return;
            }
            
            // In a real implementation, this would authenticate with a server
            alert('This is a placeholder for the login functionality that will be implemented in a future phase.');
        });
    }

    // Helper Functions
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}); 