// Click each plant's "A LITTLE MORE" button to reveal a bonus fact.
document.querySelectorAll('.detail-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const detail = button.nextElementSibling;
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    detail.hidden = isOpen;
    button.textContent = isOpen ? '+ A LITTLE MORE' : '− SHOW LESS';
  });
});
