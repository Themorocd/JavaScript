function abrirvetanas() {
    for (let i = 0; i < 5; i++) {
      let ventana = window.open('', "ventana" + (i+1), 'width=200,height=200');
      ventana.document.write("<h1>Ventana "+(i+1)+"</h1>");
      ventana.document.write("<button onclick='window.close()'>Cerrar ventana</button");
    }
  }
  
 