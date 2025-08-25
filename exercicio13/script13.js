function numeros(){

    let num;
    let jogador;

     jogador = Number(window.prompt("Digite um nùmero"));

     if (jogador > num) {
            mostraResultado.innerHTML += `<p> <b>TENTATIVA ${tentativas}:</b> você tentou o número <b>${jogador}</b>, tente um numero <b>MENOR!</b></p>`;
        } else {
            mostraResultado.innerHTML += `<p> <b>TENTATIVA ${tentativas}:</b> você tentou o número <b>${jogador}</b>, tente um numero <b>MAIOR!</b></p>`;
        } 
}