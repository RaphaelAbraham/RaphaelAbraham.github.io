// Smooth scrolling for navigation links
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

// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (name && email && message) {
    alert(
      "MESSAGE SENT!\n\nThank you for reaching out. I will get back to you as soon as possible."
    );
    this.reset();
  } else {
    alert("ERROR!\n\nPlease fill in all required fields.");
  }
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function updateActiveNav() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.background = "";
    link.style.color = "#ffffffff";
    if (link.getAttribute("href") === "#" + current) {
      link.style.background = "#000";
      link.style.color = "#ff0000";
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

// Create tooltip element
const tooltip = document.createElement("div");
tooltip.className = "glitch-tooltip";
tooltip.textContent = "DON'T BE AFFRAID, CLICK IT";
document.body.appendChild(tooltip);

// Add glitch effect on hover for project cards
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.animation = "glitch 0.3s ease";
    tooltip.style.opacity = "1";
  });

  card.addEventListener("mousemove", function (e) {
    tooltip.style.left = e.pageX + 20 + "px";
    tooltip.style.top = e.pageY + 20 + "px";
  });

  card.addEventListener("mouseleave", function () {
    tooltip.style.opacity = "0";
  });

  card.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

// Add glitch animation to CSS dynamically
const style = document.createElement("style");
style.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
    
    .glitch-tooltip {
        position: absolute;
        background: #ff0000;
        color: #fff;
        padding: 0.8rem 1.2rem;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 0.85rem;
        border: 4px solid #000;
        box-shadow: 4px 4px 0 #000;
        pointer-events: none;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.2s;
        white-space: nowrap;
        letter-spacing: 0.5px;
    }
`;
document.head.appendChild(style);

// Console message for developers
console.log(
  "%c///CYBERSEC PORTFOLIO",
  "color: #ff0000; font-size: 20px; font-weight: bold; background: #000; padding: 10px;"
);
console.log(
  "%cIf you can see this, you know your way around dev tools. Nice!",
  "color: #ff0000; font-size: 12px;"
);
console.log(
  "%cInterested in the code? Check out my GitHub!",
  "color: #fff; font-size: 12px;"
);

// Add keyboard shortcuts
document.addEventListener("keydown", function (e) {
  // Press 'C' to scroll to contact
  if (e.key === "c" || e.key === "C") {
    if (!e.target.matches("input, textarea")) {
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    }
  }
  // Press 'S' to scroll to skills
  if (e.key === "s" || e.key === "S") {
    if (!e.target.matches("input, textarea")) {
      document.querySelector("#skills").scrollIntoView({ behavior: "smooth" });
    }
  }
  // Press 'P' to scroll to projects
  if (e.key === "p" || e.key === "P") {
    if (!e.target.matches("input, textarea")) {
      document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
    }
  }

  // Press 'H' to scroll to top
  if (e.key === "h" || e.key === "H") {
    if (!e.target.matches("input, textarea")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
});

// Add a warning banner effect (optional - can be removed)
window.addEventListener("load", function () {
  console.log(
    "%c⚠️ SECURITY NOTICE",
    "color: #ff0000; font-size: 16px; font-weight: bold;"
  );
  console.log(
    "%cThis portfolio is for educational and professional purposes only.",
    "color: #fff; font-size: 12px;"
  );
});
