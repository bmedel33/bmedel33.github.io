// script.js - Portfolio Interaction Logics
document.addEventListener('DOMContentLoaded', () => {
  console.log('Rutgers AI Portfolio initialized successfully.');

  // Smooth scroll helper for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
