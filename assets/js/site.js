document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('.theme-toggle');
  if (!button) return;

  function updateButton(theme) {
    var dark = theme === 'dark';
    button.setAttribute('aria-label', dark ? 'লাইট মোড চালু করুন' : 'ডার্ক মোড চালু করুন');
    var icon = button.querySelector('.theme-icon');
    if (icon) icon.textContent = dark ? '☀' : '☾';
  }

  updateButton(document.documentElement.dataset.theme || 'light');
  button.addEventListener('click', function () {
    var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('hope-theme', next); } catch (e) {}
    updateButton(next);
  });
});
