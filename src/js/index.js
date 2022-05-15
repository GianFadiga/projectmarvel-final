const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');


        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;


        const nomeJogador = document.getElementById('nome-jogador-1');
        nomeJogador.innerHTML = personagem.getAttribute('data-name');

    })
});