/* ===================================================================
   SSV Home Cleaning Services — script.js
   Mobile nav, FAQ accordion, stats counter, gallery tabs, quote modal,
   and call/WhatsApp click-tracking hooks for Google Ads & Meta Ads.
   =================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Animated stats counter (runs once, on scroll into view) ---------- */
  var counters = document.querySelectorAll('.num[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10) || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        var duration = 1200;
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var progress = Math.min((ts - start) / duration, 1);
          el.textContent = Math.floor(progress * target) + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { counterObserver.observe(c); });
  }

  /* ---------- Gallery before/after tab filter ---------- */
  var tabs = document.querySelectorAll('.gallery-tab');
  var pairs = document.querySelectorAll('[data-category]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      var cat = tab.getAttribute('data-filter');
      pairs.forEach(function (p) {
        p.style.display = (cat === 'all' || p.getAttribute('data-category') === cat) ? '' : 'none';
      });
    });
  });

  /* ---------- Quote popup modal ---------- */
  var modal = document.getElementById('quoteModal');
  var openers = document.querySelectorAll('[data-open-quote]');
  var closer = document.querySelector('.modal-close');
  openers.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (modal) modal.classList.add('open');
    });
  });
  if (closer) closer.addEventListener('click', function () { modal.classList.remove('open'); });
  if (modal) modal.addEventListener('click', function (e) { if (e.target === modal) modal.classList.remove('open'); });

  var quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();
      trackConversion('quote_form_submit');
      window.location.href = 'thank-you.html';
    });
  }

  /* ---------- Call & WhatsApp click tracking ----------
     Fires a dataLayer / fbq event before navigating, so Google Ads
     and Meta Ads can count these as conversions. Replace the event
     names below with the exact conversion labels from your ad accounts. */
  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener('click', function () { trackConversion('call_click'); });
  });
  document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
    link.addEventListener('click', function () { trackConversion('whatsapp_click'); });
  });

  function trackConversion(label) {
    try {
      if (window.dataLayer) {
        window.dataLayer.push({ event: label });
      }
      if (typeof fbq === 'function') {
        fbq('trackCustom', label);
      }
    } catch (err) {
      /* tracking should never block the user action */
      console.warn('Tracking not available:', err);
    }
  }

});
