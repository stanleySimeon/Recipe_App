const toggle = document.getElementById('navbar-default');
const btn = document.getElementById('btn-toggle');

btn.addEventListener('click', () => {
  toggle.classList.toggle('show');
});
