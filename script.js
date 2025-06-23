// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const navMenu = document.getElementById("navMenu")

  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
    })
  })

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Header background on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
      header.style.background = "rgba(2, 6, 23, 0.98)"
    } else {
      header.style.background = "rgba(2, 6, 23, 0.95)"
    }
  })

  // Button click handlers
  const ctaButtons = document.querySelectorAll(".btn-primary")
  ctaButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Add your CTA logic here
      console.log("CTA button clicked")
      // Example: redirect to signup page or open modal
    })
  })

  // Add hover effects to feature cards
  const featureCards = document.querySelectorAll(".feature-card")
  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // --- GSAP ScrollTrigger Animations ---
  if (window.gsap && window.ScrollTrigger) {
    gsap.utils.toArray('.feature-card, .benefit-item, .use-cases-card').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });
  }
})

// Add mobile menu styles dynamically
const style = document.createElement("style")
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(2, 6, 23, 0.98);
            backdrop-filter: blur(10px);
            border-top: 1px solid rgba(148, 163, 184, 0.1);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-menu.active {
            display: flex;
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
    }
`
document.head.appendChild(style)
