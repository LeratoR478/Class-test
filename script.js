// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Scroll to top button functionality
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Newsletter form submission (prevent default and show alert)
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
            alert(`Thank you for subscribing! We'll send inspiration to ${emailInput.value}`);
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('#name')?.value;
        const email = contactForm.querySelector('#email')?.value;
        const message = contactForm.querySelector('#message')?.value;
        
        if (name && email && message) {
            alert(`Thank you ${name}! We've received your message and will get back to you soon.`);
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Add to Cart button functionality
const addToCartBtns = document.querySelectorAll('.btn-add');
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const productCard = btn.closest('.product-card');
        const productName = productCard?.querySelector('h3')?.innerText || 'Item';
        alert(`${productName} added to your cart!`);
    });
});