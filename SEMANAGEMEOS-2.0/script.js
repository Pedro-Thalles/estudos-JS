const BotaoAlterarTema = document.querySelector('#botao-alterar-tema')
const ImagemBotao = document.querySelector('.imagem-botao')
const corpo = document.querySelector('body')
BotaoAlterarTema.addEventListener('click', () => {
    corpo.classList.toggle('modo-escuro')
    if(corpo.classList.contains('modo-escuro') == false){
        ImagemBotao.setAttribute("src", "./imagens/sun.png")
    } else {
        ImagemBotao.setAttribute("src", "./imagens/moon.png")
    }
}) 