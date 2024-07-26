const botoes = document.querySelectorAll('.opcoes');
const abas = document.querySelectorAll('aba-conteudo');


for (let i = 0; i < botoes.length; i++) {
    botoes.onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove('ativo');
            abas[j].classList.remove('ativo');
        }
         botoes[i].classList.add('ativo');
         abas[i].classList.add('ativo');
        
    }
    
}
