const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    navigation.classList.toggle('is-open', !open);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
      toggle.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    }
  });
}
