// DASBF — main.js

// --- Hamburger toggle ---
const toggle = document.querySelector('.nav-toggle');
const menu   = document.querySelector('.nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
}

// --- About dropdown ---
const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
const dropdown       = document.querySelector('.nav-dropdown');
if (dropdownToggle && dropdown) {
  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    dropdownToggle.classList.toggle('open', isOpen);
    dropdownToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close when clicking a dropdown link
  dropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      dropdown.classList.remove('open');
      dropdownToggle.classList.remove('open');
      if (menu) {
        menu.classList.remove('open');
        if (toggle) toggle.classList.remove('open');
      }
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdownToggle.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      dropdownToggle.classList.remove('open');
    }
  });
}

// --- Accordion ---
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body   = btn.nextElementSibling;
    const isOpen = body.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });
});
