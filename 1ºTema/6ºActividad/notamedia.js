let trimestre1 = parseInt(prompt("Introduce la nota del primer trimestre<br>"));
let trimestre2 = parseInt(prompt("Introduce la nota del segundo trimestre<br>"));
let trimestre3 = parseInt(prompt("Introduce la nota del tercer trimestre<br>"));

let notamedia = (trimestre1+trimestre2+trimestre3)/3;

if(notamedia<5){
    document.write("Suspenso")
} else if(notamedia>=5 && notamedia<=7){
    document.write("aprobado")
} else(
    document.write("notable")
)

function fechagradu(){

    document.getElementById("demo2").innerHTML = "Dia 30 de junio";


}

function fecharecu(){

    document.getElementById("demo").innerHTML = "Dia 15 de junio";

}