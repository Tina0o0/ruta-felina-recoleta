function go(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', () => {
    document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
  });
});
