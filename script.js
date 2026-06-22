document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 3-STATE THEME MANAGER (LIGHT / DARK / SYSTEM)
  // ==========================================
  const themeButtons = {
    light: document.getElementById('theme-opt-light'),
    dark: document.getElementById('theme-opt-dark'),
    system: document.getElementById('theme-opt-system')
  };
  
  const systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Helper to apply system-defined theme
  function applySystemTheme() {
    const isDark = systemMediaQuery.matches;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }

  // Master theme applier
  function setThemeMode(mode) {
    // Remove active classes
    Object.values(themeButtons).forEach(btn => {
      if (btn) btn.classList.remove('active');
    });

    // Add active class to selected button
    if (themeButtons[mode]) {
      themeButtons[mode].classList.add('active');
    }

    // Apply theme changes to document
    if (mode === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else if (mode === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      // System Theme
      applySystemTheme();
    }

    // Save to local storage
    localStorage.setItem('portfolio-theme-mode', mode);
  }

  // Event Listeners for Theme Selection Buttons
  Object.keys(themeButtons).forEach(mode => {
    const btn = themeButtons[mode];
    if (btn) {
      btn.addEventListener('click', () => setThemeMode(mode));
    }
  });

  // Listen to OS theme updates in real-time when 'system' is active
  systemMediaQuery.addEventListener('change', () => {
    const currentMode = localStorage.getItem('portfolio-theme-mode') || 'system';
    if (currentMode === 'system') {
      applySystemTheme();
    }
  });

  // Initialize Theme on startup
  const savedMode = localStorage.getItem('portfolio-theme-mode') || 'system';
  setThemeMode(savedMode);

  // ==========================================
  // MOBILE NAVIGATION DRAWER
  // ==========================================
  const burgerMenuBtn = document.getElementById('burger-menu-btn');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');

  function toggleMobileMenu() {
    burgerMenuBtn.classList.toggle('open');
    mobileNavOverlay.classList.toggle('open');
    if (mobileNavOverlay.classList.contains('open')) {
      document.body.style.overflow = 'hidden'; // Disable scroll when menu is open
    } else {
      document.body.style.overflow = '';
    }
  }

  if (burgerMenuBtn) {
    burgerMenuBtn.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile drawer on link click
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenuBtn.classList.remove('open');
      mobileNavOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ==========================================
  // HEADER SCROLL STYLING
  // ==========================================
  const headerElement = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      headerElement.classList.add('scrolled');
    } else {
      headerElement.classList.remove('scrolled');
    }
  });

  // ==========================================
  // TYPING EFFECT (HERO)
  // ==========================================
  const typingTarget = document.getElementById('typing-text');
  const wordsToType = ["게임 개발자", "웹 풀스택 엔지니어", "AI 개발자"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentWord = wordsToType[wordIndex];
    
    if (isDeleting) {
      // Remove character
      typingTarget.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Speed up erasing
    } else {
      // Add character
      typingTarget.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120; // Default typing speed
    }

    // Word completion check
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at full word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % wordsToType.length;
      typingSpeed = 500; // Pause before typing next word
    }

    setTimeout(typeEffect, typingSpeed);
  }

  // Init typing animation
  if (typingTarget) {
    typeEffect();
  }

  // ==========================================
  // INTERSECTION OBSERVER FOR SCROLL REVEALS
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });



  // ==========================================
  // PROJECTS CATEGORY FILTER
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-wrapper');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active classes on buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        // Hide/Show logic
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ==========================================
  // SIMULATED FORM SUBMISSION & TOAST NOTIFICATION
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const toastNotification = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');

  function showToast(message, isSuccess = true) {
    toastMsg.textContent = message;
    
    if (isSuccess) {
      toastNotification.style.borderLeftColor = 'var(--accent-primary)';
    } else {
      toastNotification.style.borderLeftColor = '#ef4444'; // Red
    }

    toastNotification.classList.add('show');
    
    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4000);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const originalBtnText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '전송 중...';
      
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        
        showToast('성공적으로 문의가 발송되었습니다! 감사합니다.', true);
        contactForm.reset();
      }, 1500);
    });
  }
});
