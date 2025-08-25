let mostraResultado = document.querySelector("#resultado");
let inscritos = 0;
let times = 0;

function inscrever () {
    inscritos ++;
    times = parseInt (inscritos / 3);  

    mostraResultado.innerHTML = `<p> Número de inscritos: ${inscritos}.</p><p>números de times ${times}:`;

    if(times >= 4 ){
        alert("Ja e possivel inicar o campeonato, pois temos 4 equipes");
    }
}