function abrir (dato){

    let foto = "images/" +dato+ ".jpg";
    miventana = window.open('','','width=600, height=400');
    miventana.document.write('<html>');
    miventana.document.write('<head>');
    miventana.document.write('</head>');
    miventana.document.write('<body>');
    miventana.document.write('<h1>Imagen ampliada</h1>');
    miventana.document.write('<img src='+ foto +'><br>');
    miventana.document.write('<input type = button value = Cerrar onClick = window.close()>');
    miventana.document.write('</body>');
    miventana.document.write('</html>');


}