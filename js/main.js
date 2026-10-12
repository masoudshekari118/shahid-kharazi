/* ==================== اسپلش اسکرین ==================== */
// برای حذف اسپلش، این خط رو کامنت کن یا مقدار رو false بذار
const SHOW_SPLASH = true;

window.addEventListener('load', () => {
  const splash = document.getElementById('splash');
  if (!splash) return;
  if (!SHOW_SPLASH) {
    splash.remove();
    return;
  }
  setTimeout(() => {
    splash.classList.add('hidden');
    setTimeout(() => splash.remove(), 800);
  }, 1100);
});

/* ==================== منوی موبایل ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.mobile-nav .close-btn');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && mobileNav) {
    closeBtn.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // بستن منو با کلیک روی لینک
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
});

/* ==================== اسلایدر ==================== */
function initSlider(sliderEl) {
  const slides = sliderEl.querySelectorAll('.slide');
  const dots = sliderEl.querySelectorAll('.slider-dots button');
  let current = 0;

  function show(i) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[i].classList.add('active');
    if (dots[i]) dots[i].classList.add('active');
    current = i;
  }

  function next() { show((current + 1) % slides.length); }
  function prev() { show((current - 1 + slides.length) % slides.length); }

  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));

  const nextBtn = sliderEl.querySelector('.slider-arrow.next');
  const prevBtn = sliderEl.querySelector('.slider-arrow.prev');
  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);

  if (slides.length > 1) {
    setInterval(next, 5000);
  }
}

document.querySelectorAll('.hero-slider').forEach(initSlider);

/* ==================== مودال ==================== */
function openModal(html) {
  let overlay = document.getElementById('global-modal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'global-modal';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-box">
        <button class="modal-close" aria-label="بستن">✕</button>
        <div class="modal-content"></div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector('.modal-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }
  overlay.querySelector('.modal-content').innerHTML = html;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('global-modal');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ==================== کپی شماره کارت ==================== */
document.addEventListener('click', (e) => {
  const box = e.target.closest('.card-number-box');
  if (!box) return;
  const num = box.querySelector('.card-num').textContent.replace(/\s/g, '');
  navigator.clipboard.writeText(num).then(() => {
    box.classList.add('copied');
    const hint = box.querySelector('.copy-hint');
    const original = hint.textContent;
    hint.textContent = '✓ کپی شد!';
    setTimeout(() => {
      box.classList.remove('copied');
      hint.textContent = original;
    }, 2000);
  });
});

/* ==================== فرم ==================== */
document.querySelectorAll('form[data-demo]').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const alert = form.querySelector('.alert');
    if (alert) {
      alert.classList.add('show');
      setTimeout(() => alert.classList.remove('show'), 5000);
    }
    form.reset();
  });
});

/* ==================== فیلتر و جستجو ==================== */
function initFilter(containerSelector, itemSelector, searchSelector, chipSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const items = container.querySelectorAll(itemSelector);
  const search = document.querySelector(searchSelector);
  const chips = document.querySelectorAll(chipSelector);

  let activeFilter = 'all';
  let query = '';

  function apply() {
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      const cat = item.dataset.category || '';
      const matchQuery = !query || text.includes(query);
      const matchFilter = activeFilter === 'all' || cat === activeFilter;
      item.style.display = (matchQuery && matchFilter) ? '' : 'none';
    });
  }

  if (search) {
    search.addEventListener('input', (e) => {
      query = e.target.value.trim().toLowerCase();
      apply();
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter || 'all';
      apply();
    });
  });
}

/* ==================== تایم‌لاین ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => observer.observe(item));
});

/* ==================== پلیر صوت ==================== */
document.querySelectorAll('.audio-card').forEach(card => {
  const audio = card.querySelector('audio');
  const playBtn = card.querySelector('.audio-play');
  const barFill = card.querySelector('.audio-bar-fill');

  if (!audio || !playBtn) return;

  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = '⏸';
    } else {
      audio.pause();
      playBtn.textContent = '▶';
    }
  });

  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      const pct = (audio.currentTime / audio.duration) * 100;
      if (barFill) barFill.style.width = pct + '%';
    }
  });

  audio.addEventListener('ended', () => {
    playBtn.textContent = '▶';
    if (barFill) barFill.style.width = '0%';
  });
});

/* ==================== علامت‌گذاری لینک فعال ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});

/* ==================== دکمه بازگشت به بالا ==================== */
(function() {
  // ساخت دکمه
  const btn = document.createElement('button');
  btn.className = 'scroll-to-top';
  btn.setAttribute('aria-label', 'بازگشت به بالا');
  btn.setAttribute('title', 'بازگشت به بالا');
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
  `;
  document.body.appendChild(btn);

  // نمایش/مخفی کردن بر اساس اسکرول
  let ticking = false;

  function checkScroll() {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(checkScroll);
      ticking = true;
    }
  }, { passive: true });

  // کلیک → اسکرول نرم به بالا
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // بررسی اولیه (اگه کاربر با صفحه اسکرول‌شده وارد شد)
  checkScroll();
})();
