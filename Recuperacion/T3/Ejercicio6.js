window.onload = iniciar;

let ventanasecundaria;

function iniciar(){

    document.getElementById('form').addEventListener('submit',mandourl);

}

function mandourl(event){

    event.preventDefault();


    let url = document.getElementById('url').value;
    if(ventanasecundaria){
        ventanasecundaria.close();
 }
 ventanasecundaria = window.open(url,'ventanasecundaria','width=500,height=500');



}