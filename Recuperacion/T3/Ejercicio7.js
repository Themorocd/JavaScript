window.onload = iniciar;

let contador = 0;

function iniciar(){

    document.body.style.backgroundColor = '#' +Math.floor(Math.random() * 16777215).toString(16);
    contador ++;
    if(contador <=5){
        setTimeout(iniciar, 1000);
    }else{
        alert('El proceso ha terminado')
    }

}