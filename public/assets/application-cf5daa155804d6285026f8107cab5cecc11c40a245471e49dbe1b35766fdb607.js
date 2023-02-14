// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const toggle = document.getElementById('navbar-default');
const btn = document.getElementById('btn-toggle');

btn.addEventListener('click', () => {
    toggle.classList.toggle('show');
    console.log('click');
});
