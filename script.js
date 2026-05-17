// Navbar auto close on mobile
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const bsCollapse = new bootstrap.Collapse(menuToggle, {
      toggle: false
    });
    bsCollapse.hide();
  });
});