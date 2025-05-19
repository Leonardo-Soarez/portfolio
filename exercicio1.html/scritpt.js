//função que vai somar os valores
function somar (){
    
//declaração das variaveis
    let num1 = 0;
    let num2 = 0;

//Entrada para o usuario digitar
    num1 = Number(window.prompt('Digite um número: '));
    num2 = Number(window.prompt('Digite outro número: '));

//soma as variaveis
    let soma = num1 + num2;

//alerta as variaveis
    alert(soma)

//verificar se o resultado e maior ou menor que 10
    if(soma > 10){
        alert("O resultado e maior que 10")
    } else {
        alert("Não e maior que 10")
    }

}