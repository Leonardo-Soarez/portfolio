//função que vai somar os valores
function somar (){

//declaração das variaveis
    let ano1 = 0;
    let idade = 0;
    
//Entrada para o usuario digitar
    ano1 = Number(window.prompt('Digite o ano que estamos: '));

//subtrai as variaveis
    idade = 2025 - ano1;

//alerta as variaveis
    alert("Sua idade e " + idade);

//verificar se o resultado e maior ou menor que 18
    if(idade > 18){
      alert("Você pode tirar sua carteira de motorista")
    } else {
      let dif = 18 - idade;
      alert("Você não pode tirar carteira de motorista pois ainda faltam " + dif + " anos para completar 18 anos")
    }
}

