// Pesquisa de componentes na página inicial.
const searchInput = document.getElementById('searchInput');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLocaleLowerCase('pt-BR');
    document.querySelectorAll('.card').forEach((card) => {
      const title = card.querySelector('h3')?.textContent.toLocaleLowerCase('pt-BR') || '';
      const description = card.querySelector('p')?.textContent.toLocaleLowerCase('pt-BR') || '';
      card.hidden = !title.includes(query) && !description.includes(query);
    });
  });
}

// O formulário é demonstrativo: não envia mensagens para um servidor.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Mensagem validada! Este formulário é apenas uma demonstração e ainda não envia emails.');
    contactForm.reset();
  });
}
