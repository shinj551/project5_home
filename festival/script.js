const buttons = document.querySelectorAll('.art-piece');

function closeDetails() {
  for (let i = 0; i < buttons.length; i++) {
    const id = buttons[i].getAttribute('aria-controls');
    document.getElementById(id).hidden = true;
    buttons[i].setAttribute('aria-expanded', 'false');
  }
}

function toggleDetail() {
  const id = this.getAttribute('aria-controls');
  const detail = document.getElementById(id);
  const wasOpen = !detail.hidden;

  closeDetails();

  if (!wasOpen) {
    detail.hidden = false;
    this.setAttribute('aria-expanded', 'true');
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', toggleDetail);
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeDetails();
  }
});
