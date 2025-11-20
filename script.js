// ==========================
// Smooth Scrolling for Nav
// ==========================
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ==========================
// Fade-in Sections on Scroll
// ==========================
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

// ==========================
// Contact Form Simulation
// ==========================
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
if (form && formStatus) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    formStatus.textContent = "Sending...";
    setTimeout(() => {
      formStatus.textContent = "Message sent successfully!";
      form.reset();
    }, 1500);
  });
}

// ==========================
// Generic Image Carousel
// ==========================
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => {
  let index = 0;
  const images = carousel.querySelectorAll('img');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');

  function showImage(i) {
    images.forEach(img => img.classList.remove('active'));
    images[i].classList.add('active');
  }

  if (prev) prev.addEventListener('click', () => { index = (index - 1 + images.length) % images.length; showImage(index); });
  if (next) next.addEventListener('click', () => { index = (index + 1) % images.length; showImage(index); });

  // Auto-slide every 5 sec
  setInterval(() => { index = (index + 1) % images.length; showImage(index); }, 5000);
});

// ==========================
// About Us Carousel with Dots
// ==========================
const aboutSlides = document.querySelectorAll(".about-carousel .slide");
const dots = document.querySelectorAll(".dots .dot");
let currentSlide = 0;

function showAboutSlide(index) {
  aboutSlides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  aboutSlides[index].classList.add("active");
  dots[index].classList.add("active");
}

// Click on dots
dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    currentSlide = idx;
    showAboutSlide(currentSlide);
  });
});

// Auto slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % aboutSlides.length;
  showAboutSlide(currentSlide);
}, 6000);

// ==========================
// Hero Background Slideshow
// ==========================
const heroImages = [
  'images/Image1.png',
  // 'images/Techposter.png',
  'images/ball.png',
  'images/butterfly.png',
  // 'images/check.png',
];

const bg1 = document.querySelector('.hero-bg1');
const bg2 = document.querySelector('.hero-bg2');

let currentHero = 0;
let showingBg1 = true;

// Initialize first image
if (bg1 && bg2) {
  bg1.style.backgroundImage = `url(${heroImages[0]})`;
  bg1.classList.add('visible');

  function slideHero() {
    const nextImage = (currentHero + 1) % heroImages.length;

    if (showingBg1) {
      bg2.style.backgroundImage = `url(${heroImages[nextImage]})`;
      bg2.classList.add('visible');
      bg1.classList.remove('visible');
    } else {
      bg1.style.backgroundImage = `url(${heroImages[nextImage]})`;
      bg1.classList.add('visible');
      bg2.classList.remove('visible');
    }

    showingBg1 = !showingBg1;
    currentHero = nextImage;
  }

  // Change hero image every 5 seconds
  setInterval(slideHero, 5000);
}


// ==========================
// Product Modal with Carousel
// ==========================
const serviceCards = document.querySelectorAll(".service-card");
const productModal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.querySelector(".modal .close");

serviceCards.forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalBody.innerHTML = card.dataset.content;
    productModal.style.display = "block";
  });
});

closeModalBtn.addEventListener("click", () => {
  productModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === productModal) {
    productModal.style.display = "none";
  }
});

