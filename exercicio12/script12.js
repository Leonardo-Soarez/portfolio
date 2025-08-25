let mostrarHTML = document.getElementById("resultado")

function tabuada() {
    let numero = prompt("Digite um número para calcular a tabuada")
    let contador = 1;

    mostrarHTML.innerHTML = `<p><b> TABUADA </b></p>`;
    while (contador <= 10) {
        mostrarHTML>innerHTML  `${numero} x ${contador} = ${numero*contador}`;
        contador++;
    }
}