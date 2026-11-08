// Busca simples no index: filtra os cards conforme o texto digitado
const searchInput = document.getElementById('searchInput');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    document.querySelectorAll('.card').forEach(el => {
      const title = el.querySelector('h3')?.innerText.toLowerCase() || '';
      el.style.display = title.includes(q) ? '' : 'none';
    });
  });
}

// Formulário de contato (simulação local)
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! (simulação local)');
    form.reset();
  });