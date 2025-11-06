import { templates } from './templates.js';
import { validateForm } from './formValidation.js';

const app = document.getElementById('app');

function render(route) {
  app.innerHTML = templates[route] || templates['home'];
  if (route === 'contato') {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
  }
}

document.querySelectorAll('[data-route]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const route = e.target.getAttribute('data-route');
    window.location.hash = route;
  });
});

window.addEventListener('hashchange', () => {
  const route = window.location.hash.replace('#', '');
  render(route);
});

window.addEventListener('DOMContentLoaded', () => {
  const route = window.location.hash.replace('#', '') || 'home';
  render(route);
});