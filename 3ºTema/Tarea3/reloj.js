function mostrarhora() {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();

  let reloj = "0"+((hora>12)? hora -12 :hora);
  reloj +=((minutos<10)? ":0" : ":")+minutos;
  reloj +=((segundos<10)? ".0" : ":")+segundos;
  reloj +=(hora >= 12) ? "P.M" : "A.M.";


  document.getElementById("hora").value = reloj;


  let dia = fecha.getDate();
  let mes = fecha.getMonth()+1;//Recordar el +1 ya que son 11 en vez de 12
  let año = fecha.getFullYear();

  switch (mes) {
    case 1:
      mes = "enero";
      break;

    case 2:
      mes = "febrero";
      break;
    case 3:
      mes = "marzo";
      break;
    case 4:
      mes = "abril";
      break;
    case 5:
      mes = "mayo";
      break;
    case 6:
      mes = "junio";
      break;
    case 7:
      mes = "julio";
      break;
    case 8:
      mes = "agosto";
      break;
    case 9:
      mes = "septiembre";
      break;
    case 10:
      mes = "octubre";
      break;
    case 11:
      mes = "noviembre";
      break;
    case 12:
      mes = "diciembre";
      break;
  }
  document.getElementById("dia").innerHTML = "Hoy es "+dia+" de "+mes+" de "+año;
}

setInterval(mostrarhora, 1000);

mostrarhora();
