'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Typing Effect
const typedText = document.getElementById('typed-text');
const textToType = 'operational data into growth intelligence.';
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    typedText.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

// Start typing after a delay
setTimeout(typeWriter, 1000);

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Particle Background
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  const particleCount = Math.floor(window.innerWidth / 10);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1
    });
  }
}

function updateParticles() {
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(34, 211, 238, ${p.opacity})`; // Teal color
    ctx.fill();
  });
}

function animateParticles() {
  updateParticles();
  drawParticles();
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createParticles();
});

resizeCanvas();
createParticles();
animateParticles();

// Ripple Effect for Buttons
document.querySelectorAll('.hero-btn, .more-projects-btn').forEach(btn => {
  btn.classList.add('ripple');
  btn.addEventListener('click', function(e) {
    const ripple = this;
    ripple.classList.add('active');
    setTimeout(() => ripple.classList.remove('active'), 600);
  });
});

// Page Load Animation
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loading');
});

// Mouse Follower
const mouseFollower = document.querySelector('.mouse-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function updateMouseFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  mouseFollower.style.transform = `translate(${followerX - 10}px, ${followerY - 10}px)`;
  requestAnimationFrame(updateMouseFollower);
}

updateMouseFollower();

// Skills Animation
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 }); // Lower threshold to trigger earlier

const resumeSection = document.querySelector('.resume');
if (resumeSection) {
  skillsObserver.observe(resumeSection);
}

function animateSkills() {
  // Animate progress bars
  const progressFills = document.querySelectorAll('.skill-progress-fill');
  progressFills.forEach((fill, index) => {
    const skillItem = fill.closest('.skills-item');
    const dataElement = skillItem.querySelector('data');
    const targetWidth = dataElement.getAttribute('value') + '%';
    fill.style.width = '0%';
    setTimeout(() => {
      fill.style.width = targetWidth;
    }, index * 100); // Faster stagger
  });

  // Animate percentage numbers
  const skillDatas = document.querySelectorAll('.skills-item .title-wrapper data');
  skillDatas.forEach((data, index) => {
    const targetValue = parseInt(data.getAttribute('value'));
    let currentValue = 0;
    const increment = targetValue / 40; // Faster counting
    setTimeout(() => {
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(timer);
        }
        data.textContent = Math.floor(currentValue) + '%';
      }, 20); // Faster interval
    }, index * 100); // Match stagger timing
  });
}

// Other Skills Animation
const otherSkillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateOtherSkills();
      otherSkillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const additionalSkills = document.querySelector('.additional-skills');
if (additionalSkills) {
  otherSkillsObserver.observe(additionalSkills);
}

function animateOtherSkills() {
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach((tag, index) => {
    setTimeout(() => {
      tag.style.opacity = '0';
      tag.style.transform = 'translateY(20px) scale(0.8)';
      tag.style.transition = 'all 0.6s ease-out';
      setTimeout(() => {
        tag.style.opacity = '1';
        tag.style.transform = 'translateY(0) scale(1)';
      }, 100);
    }, index * 100);
  });
}
