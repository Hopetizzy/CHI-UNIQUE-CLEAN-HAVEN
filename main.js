/**
 * CHI-UNIQUE CLEAN HAVEN LTD - INTERACTIVITY ENGINE
 * Features:
 * - Touch & Mouse Draggable Before/After Slider
 * - Residential vs Commercial Category Switcher
 * - Direct WhatsApp Inquiries Routing (+2348167079144)
 * - Mobile Navigation Drawer & FAQ Accordion
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initBeforeAfterSlider();
  initMobileMenu();
});

/* ==========================================================================
   1. NAVBAR SCROLL EFFECT
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbarWrapper');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   2. TOUCH & MOUSE BEFORE/AFTER SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('sliderContainer');
  const beforeWrapper = document.getElementById('beforeImageWrapper');
  const handle = document.getElementById('sliderHandle');
  if (!container || !beforeWrapper || !handle) return;

  let isDragging = false;

  function setSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let offsetX = x - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    beforeWrapper.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  // Mouse Events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    setSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Events for Mobile / Tablet
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    setSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    setSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/* ==========================================================================
   3. RESIDENTIAL VS COMMERCIAL CATEGORY SWITCHER
   ========================================================================== */
function switchCategory(category) {
  const tabRes = document.getElementById('tabResidential');
  const tabCom = document.getElementById('tabCommercial');
  const c1Title = document.getElementById('card1Title');
  const c1Desc = document.getElementById('card1Desc');
  const c2Title = document.getElementById('card2Title');
  const c2Desc = document.getElementById('card2Desc');
  const c3Title = document.getElementById('card3Title');
  const c3Desc = document.getElementById('card3Desc');
  const c4Title = document.getElementById('card4Title');
  const c4Desc = document.getElementById('card4Desc');

  if (category === 'residential') {
    tabRes.classList.add('active');
    tabCom.classList.remove('active');

    c1Title.textContent = "Eliminates Dirt, Germs & Allergens";
    c1Desc.textContent = "Hospital-grade sanitization that purifies home air quality, destroys dust mites, and protects babies and asthmatic family members.";

    c2Title.textContent = "Vetted & Uniformed Technicians";
    c2Desc.textContent = "Background-checked, trustworthy cleaning specialists in branded PPE arriving equipped to respect the privacy of your home.";

    c3Title.textContent = "Surface-Safe Eco Supplies";
    c3Desc.textContent = "Specialized neutral chemicals that protect delicate marble dining tables, hardwood floors, luxury leather, and velvet sofas.";

    c4Title.textContent = "The 'Dust to Dazzle' Guarantee";
    c4Desc.textContent = "We do a walk-through inspection with you before leaving. If you spot anything untouched, we re-clean it immediately for free.";
  } else {
    tabCom.classList.add('active');
    tabRes.classList.remove('active');

    c1Title.textContent = "Boosts Workplace Health & Morale";
    c1Desc.textContent = "Reduces sick days and fosters executive-level client impressions through spotless boardrooms, sanitized desks, and pristine restrooms.";

    c2Title.textContent = "After-Hours & Weekend Schedules";
    c2Desc.textContent = "Zero business disruption. Our teams clean during evenings, early mornings, or weekends with full supervisor oversight.";

    c3Title.textContent = "Heavy-Duty Industrial Fleet";
    c3Desc.textContent = "Commercial floor scrubbers, high-reach window squeegees, and industrial extraction units suited for corporate facilities.";

    c4Title.textContent = "Strict SLA & Formal Invoicing";
    c4Desc.textContent = "Corporate governance compliant: formal service agreements, standardized monthly VAT invoices, and dedicated account management.";
  }
}

/* ==========================================================================
   4. DIRECT WHATSAPP BOOKING ROUTING
   ========================================================================== */
function openWhatsAppForService(serviceName) {
  const message = `Hello Chi-Unique Clean Haven LTD!\n\nI would like to inquire about and book your *${serviceName}* service in Lagos.\n\nPlease share your current availability and packages. Thank you!`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/2348167079144?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}

/* ==========================================================================
   5. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.remove('open');
  }
}

/* ==========================================================================
   6. FAQ ACCORDION INTERACTIVITY
   ========================================================================== */
function toggleFaq(button) {
  const item = button.closest('.faq-item');
  const allItems = document.querySelectorAll('.faq-item');

  allItems.forEach(otherItem => {
    if (otherItem !== item) {
      otherItem.classList.remove('active');
    }
  });

  item.classList.toggle('active');
}
