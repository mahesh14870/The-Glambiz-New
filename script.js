// The Glambiz - script.js

// Smooth scroll is handled via CSS (scroll-behavior: smooth)
// Add any future JavaScript interactions here

// Example: Contact form submission handler
document.addEventListener('DOMContentLoaded', function () {

  const form = document.querySelector('#contact form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields before submitting.');
        return;
      }

      alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`);
      form.reset();
    });
  }

});
