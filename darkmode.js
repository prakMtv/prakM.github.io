const img = document.getElementById('profile-img');
let darkMode = false;

img.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
  img.src = darkMode ? 'tigersitting.png' : 'claytiger.png';
  img.alt = darkMode ? 'tigersitting' : 'claytiger';
});

// Example: toggling a background image for dark mode

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Example: change background image based on mode
  if (body.classList.contains('dark-mode')) {
    body.style.backgroundImage = "url('pixel_skyk.png')";
  } else {
    body.style.backgroundImage = "none";
  }
}

// Optional: attach to a button
document.getElementById('darkmode-toggle')?.addEventListener('click', toggleDarkMode);