const statusText = document.querySelector('#status');
const helloBtn = document.querySelector('#helloBtn');
const themeBtn = document.querySelector('#themeBtn');
const root = document.documentElement;

helloBtn.addEventListener('click', () => {
  statusText.textContent = 'Hello from GitHub Pages!';
});

try {
  if (localStorage.getItem('theme') === 'dark') root.classList.add('dark');
} catch (e) {}

themeBtn.addEventListener('click', () => {
  const dark = root.classList.toggle('dark');
  statusText.textContent = dark ? 'Dark theme on' : 'Light theme on';
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  } catch (e) {}
});
