//cauculadora simples com 5 operações basicas:
//Adição, Subtração, Multiplicação, Divisão e Divisão com sobra;

let num1;
let num2;
let resultado;

function sobra() {
    num1 = Number(window.prompt("Digite o primeiro número"))
    num2 = Number(window.prompt("Digite o segundo número"))

    resultado = num1 % num2;

       numero = resultado % 2;

    alert("O resultado é " + resultado + ".")
    if (numero ==0) {
        alert("Par");
    }else {
        alert("Ímpar")
    }
}

function Multiplicacao() {
    num1 = Number(window.prompt("Digite o primeiro número"))
    num2 = Number(window.prompt("Digite o segundo número"))

    resultado = num1 * num2;

         numero = resultado % 2;

    alert("O resultado é " + resultado + ".")
    if (numero ==0) {
        alert("Par");
    }else {
        alert("Ímpar")
    }
}

function adisao() {
    num1 = Number(window.prompt("Digite o primeiro número"))
    num2 = Number(window.prompt("Digite o segundo número"))

    resultado = num1 + num2;

      numero = resultado % 2;

    alert("O resultado é " + resultado + ".")
    if (numero ==0) {
        alert("Par");
    }else {
        alert("Ímpar")
    }
}

function subtracao() {
    num1 = Number(window.prompt("Digite o primeiro número"))
    num2 = Number(window.prompt("Digite o segundo número"))

    resultado = num1 - num2;
     numero = resultado % 2;

    alert("O resultado é " + resultado + ".")
    if (numero ==0) {
        alert("Par");
    }else {
        alert("Ímpar")
    }
}
