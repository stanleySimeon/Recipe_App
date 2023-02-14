const toggle = document.getElementById('navbar-default');
const btn = document.getElementById('btn-toggle');

btn.addEventListener('click', () => {
  toggle.classList.toggle('show');
});

document.addEventListener("click", (event) => {
    if (!event.target.matches('#btn-toggle')) return;
    console.log('You clicked a magical button!');
});
