/**
 * animations.js
 * Specialized animation effects for Davis Professional Firefighters Local 3494 website
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize hero section animations
  initHeroAnimations();
  
  // Initialize section reveal animations
  initSectionReveal();
  
  // Initialize photo gallery hover effects
  initGalleryEffects();
  
  // Initialize leadership team hover effects
  initLeadershipEffects();
  
  // Initialize counter animations for statistics
  initCounterAnimations();
});

/**
 * Hero section text and background animations
 */
function initHeroAnimations() {
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroContent = document.querySelector('.hero-content');
  
  if (!heroTitle || !heroSubtitle || !heroContent) return;
  
  // Add staggered fade-in animations
  setTimeout(() => {
    heroTitle.classList.add('animate__animated', 'animate__fadeInDown');
  }, 300);
  
  setTimeout(() => {
    heroSubtitle.classList.add('animate__animated', 'animate__fadeInUp');
  }, 700);
  
  setTimeout(() => {
    const buttons = heroContent.querySelectorAll('.btn');
    buttons.forEach((button, index) => {
      setTimeout(() => {
        button.classList.add('animate__animated', 'animate__fadeIn');
      }, index * 200 + 1100);
    });
  }, 900);
  
  // Subtle background parallax effect
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
    }
  });
}

/**
 * Reveal animations for sections as they come into view
 */
function initSectionReveal() {
  const sections = document.querySelectorAll('section');
  
  const revealSection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-revealed');
        observer.unobserve(entry.target);
      }
    });
  };
  
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
    rootMargin: '-100px'
  });
  
  sections.forEach(section => {
    section.classList.add('section-hidden');
    sectionObserver.observe(section);
  });
}

/**
 * Photo gallery hover and click animations
 */
function initGalleryEffects() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    // Add hover effect
    item.addEventListener('mouseenter', () => {
      item.classList.add('gallery-item-hover');
    });
    
    item.addEventListener('mouseleave', () => {
      item.classList.remove('gallery-item-hover');
    });
    
    // Add click effect for gallery lightbox (to be implemented)
    item.addEventListener('click', () => {
      item.classList.add('gallery-item-active');
      // Future lightbox implementation would go here
      setTimeout(() => {
        item.classList.remove('gallery-item-active');
      }, 300);
    });
  });
}

/**
 * Leadership team card hover effects
 */
function initLeadershipEffects() {
  const leadershipCards = document.querySelectorAll('.leadership-card');
  
  leadershipCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const bioElement = card.querySelector('.leadership-bio');
      const roleElement = card.querySelector('.leadership-role');
      
      if (bioElement) {
        bioElement.style.maxHeight = `${bioElement.scrollHeight}px`;
        bioElement.classList.add('bio-visible');
      }
      
      if (roleElement) {
        roleElement.classList.add('role-highlight');
      }
    });
    
    card.addEventListener('mouseleave', () => {
      const bioElement = card.querySelector('.leadership-bio');
      const roleElement = card.querySelector('.leadership-role');
      
      if (bioElement) {
        bioElement.style.maxHeight = '0';
        bioElement.classList.remove('bio-visible');
      }
      
      if (roleElement) {
        roleElement.classList.remove('role-highlight');
      }
    });
  });
}

/**
 * Statistics counter animations (for future use)
 */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.counter-value');
  
  const animateCounter = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps approx
        
        let current = 0;
        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        
        updateCounter();
        observer.unobserve(counter);
      }
    });
  };
  
  const counterObserver = new IntersectionObserver(animateCounter, {
    threshold: 0.5
  });
  
  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
}

/**
 * Fire-themed cursor trail effect (optional visual enhancement)
 * Can be enabled by adding the .fire-cursor class to the body element
 */
function initFireCursorEffect() {
  const body = document.querySelector('body');
  
  if (body.classList.contains('fire-cursor')) {
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Create a small particle at cursor position
      const particle = document.createElement('div');
      particle.classList.add('fire-particle');
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      
      document.body.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        particle.remove();
      }, 1000);
    });
  }
} 