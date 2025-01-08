
const catalog = document.querySelector('.catalog');
const submenu = document.querySelector('.submenu');

const toggleSubmenu = (isActive) => {
  submenu.classList.toggle('active', isActive);
};

catalog.addEventListener('mouseenter', () => toggleSubmenu(true));
catalog.addEventListener('mouseleave', () => toggleSubmenu(false));
