function personalizeGreeting(name) {
    document.getElementById('greeting').textContent = `Hello, ${name}!`;
  }
  document.querySelectorAll('#navigation a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });