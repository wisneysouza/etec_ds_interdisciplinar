// Sugestao
const form_sugestao = document.querySelector('.form_sugestao')
form_sugestao.addEventListener('submit', function(e) {
    e.preventDefault()

    const sugestao = {
        nome: document.getElementById('sugestao_nome').value,
        email: document.getElementById('sugestao_email').value,
        clube: document.getElementById('sugestao_clube').value,
        texto: document.getElementById('sugestao_texto').value
    }

    // Recupera as sugestões existentes ou inicializa um array vazio
    let sugestoes = JSON.parse(localStorage.getItem('formulario_sugestao')) || [];
    sugestoes.push(sugestao);
    localStorage.setItem('formulario_sugestao', JSON.stringify(sugestoes));

    alert('Sugestão salva com sucesso!');
    form_sugestao.reset();
})

// Contato
const form_contato = document.querySelector('.form_contato') // Corrigido para .form_contato
form_contato.addEventListener('submit', function(e) {
    e.preventDefault()

    const contato = {
        nome: document.getElementById('contato_nome').value,
        email: document.getElementById('contato_email').value,
        assunto: document.getElementById('contato_assunto').value,
        texto: document.getElementById('contato_texto').value
    }

    // Recupera os contatos existentes ou inicializa um array vazio
    let contatos = JSON.parse(localStorage.getItem('formulario_contato')) || [];
    contatos.push(contato);
    localStorage.setItem('formulario_contato', JSON.stringify(contatos));

    alert('Mensagem de contato salva com sucesso!');
    form_contato.reset();
})