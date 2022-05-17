var  jogador = null;
var jogadorSelecionado = document.getElementById('jogadorSelecionado');

mudarJogador ('X'); 


const escolherQuadrado = () => {
    var quadrado = document.getElementById(id)
    
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
  
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;

}

