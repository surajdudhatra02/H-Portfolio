// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.animationDuration = Math.random() * 3 + 3 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Animate skill bars
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute("data-width");
        entry.target.style.width = width;
      }
    });
  });

  skillBars.forEach((bar) => {
    observer.observe(bar);
  });
}

// Scroll animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
}

// Navbar scroll effect
function setupNavbarScroll() {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 100) {
      nav.style.background = "rgba(26, 26, 26, 0.98)";
    } else {
      nav.style.background = "rgba(26, 26, 26, 0.95)";
    }
  });
}

// Initialize everything when page loads
document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  setupSmoothScrolling();
  animateSkillBars();
  setupScrollAnimations();
  setupNavbarScroll();
  setupMobileMenu();
});

// Mobile menu functionality
function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Create mobile menu
  const mobileMenu = navLinks.cloneNode(true);
  mobileMenu.classList.add("mobile");
  mobileMenu.id = "mobile-menu";
  document.body.appendChild(mobileMenu);

  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  // Close mobile menu when clicking on a link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
      menuToggle.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}

// Add some interactivity to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});
