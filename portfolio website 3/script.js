
window.addEventListener("load", () => {
  const homeContent = document.querySelector(".home-content");
  homeContent.style.opacity = "0";
  homeContent.style.transform = "translateY(20px)";

  setTimeout(() => {
    homeContent.style.transition = "all 1s ease";
    homeContent.style.opacity = "1";
    homeContent.style.transform = "translateY(0)";
  }, 200);
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent successfully!");
  this.reset();
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Change icon between bars and X
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuIcon.classList.replace("fa-xmark", "fa-bars");
  }
});

// Optional: close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.replace("fa-xmark", "fa-bars");
  });
});
