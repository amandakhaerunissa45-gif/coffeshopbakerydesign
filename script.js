// =============================================
//  COFFE SHOP — script.js
// =============================================

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

navToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

function closeMobile() {
  mobileNav.classList.remove('open');
}

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach((el) => revealObserver.observe(el));

// Toast notification
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// Buy Now button
function addToCart(productName) {
  showToast('🛒 ' + productName + ' added to cart!');
}

// Contact form submit
function submitForm(event) {
  event.preventDefault();
  showToast("✅ Message sent! We'll be in touch soon.");
  event.target.reset();
}

// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      currentSection = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === '#' + currentSection
      ? 'var(--peach)' : '';
  });
}, { passive: true });