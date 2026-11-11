// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

// Select elements for animation
document.querySelectorAll(
  ".section-content, .section-label, .glass, .project-card"
).forEach(element => {
  element.classList.add("reveal");
  observer.observe(element);
});

// Contact form via WhatsApp
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // GANTI DENGAN NOMOR WHATSAPP KAMU
  const phone = "6281234567890";

  const text = `Halo! Saya ${name}.
Email: ${email}

Pesan:
${message}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
});