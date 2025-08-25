let aleatorio = parseInt(Math.random() * 101)
let mostraResultado = document.querySelector("#resultado");
let jogador;
let tentativas = 0

function pensar () {
    jogador = Number(window.prompt("Digite um número entre 1 e 100"));
   
    if(jogador > 0 && jogador < 101){

        tentativas ++;
    
    if (jogador !=aleatorio) {

        if (jogador > aleatorio) {
            mostraResultado.innerHTML += `<p> <b>TENTATIVA ${tentativas}:</b> você tentou o número <b>${jogador}</b>, tente um numero <b>MENOR!</b></p>`;
        } else {
            mostraResultado.innerHTML += `<p> <b>TENTATIVA ${tentativas}:</b> você tentou o número <b>${jogador}</b>, tente um numero <b>MAIOR!</b></p>`;
        } 
     } else {
            mostraResultado.innerHTML = `<p><b>Parábens! Você acertou o número ${aleatorio} em ${tentativas} tentativas. </b></p>`;
        }
    } else {
        alert("Por favor, digite um número entre 1 e 100")
    }
}