window.onchange = iniciar;

function iniciar(){

    let motivos = document.forms[0].motivo.value;
    let medalla = document.forms[0].medallas.value
    let objetivos = document.forms[0].objetivo.value;
    let despedidas = document.forms[0].despedida.value;

    let cartamotivo = document.getElementById("motivosCarta");
    let cartamedalla = document.getElementById("medallasCarta");
    let cartaobjetivos = document.getElementById("objetivosCarta");
    let cartadespedida = document.getElementById("despedidaCarta");

    cartamotivo.innerHTML = motivos;
    cartamedalla.innerHTML = medalla;
    cartaobjetivos.innerHTML = objetivos;
    cartadespedida.innerHTML = despedidas;



}