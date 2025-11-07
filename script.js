// Image Slider
const slider = document.getElementById("slider");
const slides = slider.children.length;
let index = 0;

function showSlide(i) {
  slider.style.transform = `translateX(-${i * 100}%)`;
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % slides;
  showSlide(index);
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + slides) % slides;
  showSlide(index);
});

// Auto slide every 4 seconds
setInterval(() => {
  index = (index + 1) % slides;
  showSlide(index);
}, 4000);

// Contact Form Message
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("form-status").textContent = `Thanks, ${name}! We’ll be in touch soon.`;
  this.reset();
});
