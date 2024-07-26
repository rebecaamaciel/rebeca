const botoes = document.querySelectorAll('.opcoes');
const abas = document.querySelectorAll('aba-conteudo');


for (let i = 0; i < botoes.length; i++) {
    for (let j = 0; j < botoes.length; j++) {
        botoes[i].classList.add('ativo');
        botoes[j].classList.remove('ativo');
        
    }
    
}
