/* ============================================================
   UMKM Laundry - JavaScript
   Handles UI interactions, animations, and prototype logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Navbar Scroll Effect ----------
  const navbar = document.querySelector('.navbar-custom');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }


  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  // ---------- Scroll Fade-In Animations ----------
  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));
  }


  // ---------- Stats Counter Animation ----------
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'), 10);
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 1500;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);

      element.innerHTML = current.toLocaleString('id-ID') + '<span class="stat-suffix">' + suffix + '</span>';

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }


  // ---------- Tracking Form (Prototype) ----------
  const trackingForm = document.getElementById('trackingForm');
  const trackingResult = document.getElementById('trackingResult');
  const trackingInput = document.getElementById('trackingInput');

  if (trackingForm) {
    trackingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const code = trackingInput.value.trim();
      if (!code) {
        trackingInput.focus();
        return;
      }

      // Simulate data (prototype only)
      const sampleData = {
        code: code.toUpperCase() || 'INV-24001',
        name: 'Budi Santoso',
        phone: '0812-XXXX-XXXX',
        service: 'Laundry Kiloan',
        weight: '3.5 kg',
        status: 'Sedang Dicuci',
        received: '5 Juli 2026, 10.00 WIB',
        estimate: '6 Juli 2026, 16.00 WIB',
        total: 'Rp24.500'
      };

      // Populate result
      document.getElementById('resultCode').textContent = sampleData.code;
      document.getElementById('resultName').textContent = sampleData.name;
      document.getElementById('resultPhone').textContent = sampleData.phone;
      document.getElementById('resultService').textContent = sampleData.service;
      document.getElementById('resultWeight').textContent = sampleData.weight;
      document.getElementById('resultStatus').textContent = sampleData.status;
      document.getElementById('resultReceived').textContent = sampleData.received;
      document.getElementById('resultEstimate').textContent = sampleData.estimate;
      document.getElementById('resultTotal').textContent = sampleData.total;

      // Show result
      trackingResult.classList.add('show');

      // Scroll to result
      setTimeout(function () {
        trackingResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    });
  }


  // ---------- Contact Form (Prototype) ----------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Pesan Terkirim!', 'Terima kasih, kami akan segera menghubungi Anda.');
      contactForm.reset();
    });
  }


  // ---------- Toast Notification ----------
  function showToast(title, message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-custom');
    if (existingToast) {
      existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast-custom show';
    toast.innerHTML = `
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    `;
    document.body.appendChild(toast);

    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }


  // ---------- Active Nav Link Highlight ----------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-custom .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });


  // ---------- Close Mobile Nav on Link Click ----------
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse) {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  }

});
