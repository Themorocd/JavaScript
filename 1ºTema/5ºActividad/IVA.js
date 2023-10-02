function calcularprecio(){

    let producto = parseInt(document.getElementById("precio").value);

    let total = producto * 0.21;

    let resultado = document.getElementById("resultado");

    resultado.textContent = `El IVA es: $${total.toFixed(2)}`;

}



function Confirmarpago(){

    let Pagarbutton = document.getElementById("Pagarbutton");

    Pagarbutton.textContent = "Gracias por su compra";

}