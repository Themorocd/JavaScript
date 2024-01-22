window.onchange = iniciar;

function iniciar(){


    let motivos = document.forms[0].motivo.value;
    let medalla = document.forms[0].medallas.value;
    let objetivos = document.forms[0].objetivo.value;
    let despedidas = document.forms[0].despedida.value;

    let motivosCarta = document.getElementById("motivosCarta");
    let medallacarta = document.getElementById("medallasCarta");
    let objetivocarta = document.getElementById("objetivosCarta");
    let despedidacarta = document.getElementById("despedidaCarta");

    motivosCarta.innerHTML=motivos;
    medallacarta.innerHTML = medalla;
    objetivocarta.innerHTML = objetivos;
    despedidacarta.innerHTML = despedidas;



}