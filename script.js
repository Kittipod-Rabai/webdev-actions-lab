const statusText = document.querySelector('#status');
const helloBtn = document.querySelector('#helloBtn');
const themeBtn = document.querySelector('#themeBtn');
const root = document.documentElement;

helloBtn.addEventListener('click', () => {
  statusText.textContent = 'Hello from GitHub Pages!';
});

themeBtn.addEventListener('click', () => {
  const dark = root.classList.toggle('dark');
  statusText.textContent = dark ? 'Dark theme on' : 'Light theme on';
});
