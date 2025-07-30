// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, [data-section]');
const arrowIcon = document.querySelector('#arrow-right');

// Set up arrow icon
if (arrowIcon) {
  arrowIcon.innerHTML = lucide.icons['arrow-right'].toSvg();
}

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  const isHidden = mobileMenu.classList.contains('hidden');
  menuToggle.innerHTML = isHidden ? lucide.icons['menu'].toSvg() : lucide.icons['x'].toSvg();
});

// Close mobile menu after click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuToggle.innerHTML = lucide.icons['menu'].toSvg();
  });
});

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const sectionId = link.getAttribute('data-section');
    if (sectionId) {
      scrollToSection(sectionId);
    }
  });
});

// Animate skill bars on scroll
const skillItems = document.querySelectorAll('.skill-item');
const skillsSection = document.getElementById('about');

function animateSkills() {
  skillItems.forEach(item => {
    const level = item.getAttribute('data-skill');
    item.style.setProperty('--level', level);
    item.querySelector('::before').style.width = level + '%';
  });
}

let skillsAnimated = false;
function checkSkillsVisibility() {
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8 && !skillsAnimated) {
    animateSkills();
    skillsAnimated = true;
  }
}

window.addEventListener('scroll', checkSkillsVisibility);
window.addEventListener('load', checkSkillsVisibility);

// Form submission
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});

// Add scroll animation to sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});