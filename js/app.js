/* ==========================================================================
   سليم الشعيبي للصرافة والتحويلات - Saleem Al-Shuaibi Exchange & Transfers
   Interactive JavaScript Engine - Main HQ: Aden / Mansoura (Wadie Haddad St.) - Phone: 772809452
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Daily Rates Search Filter
  // ==========================================

  const searchInput = document.getElementById('rates-search-input');
  const ratesTableBody = document.getElementById('rates-table-body');

  if (searchInput && ratesTableBody) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const rows = ratesTableBody.querySelectorAll('tr');

      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(query)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }


  // ==========================================
  // 2. Branch Locator City Filter
  // ==========================================

  const cityFilterBtns = document.querySelectorAll('.branch-city-btn');
  const branchCards = document.querySelectorAll('.branch-card');

  cityFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const city = btn.getAttribute('data-city');

      cityFilterBtns.forEach(b => b.classList.remove('btn-gold'));
      cityFilterBtns.forEach(b => b.classList.add('btn-outline-gold'));

      btn.classList.remove('btn-outline-gold');
      btn.classList.add('btn-gold');

      branchCards.forEach(card => {
        if (city === 'all' || card.getAttribute('data-city') === city) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  // ==========================================
  // 3. Mobile Navbar Toggle
  // ==========================================

  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu automatically on link click
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 4. TestFlight Modal — Close on backdrop click
  // ==========================================

  const tfModal = document.getElementById('testflight-modal');
  if (tfModal) {
    tfModal.addEventListener('click', (e) => {
      if (e.target === tfModal) {
        tfModal.classList.remove('active');
      }
    });
  }

});
