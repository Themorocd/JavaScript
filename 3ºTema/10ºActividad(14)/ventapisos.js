function abrir(dato) {
    // Definición de un objeto que contiene información detallada sobre cada imagen.
    let fotos = {
        imagen1: {
            ruta: "images/11.jpg", // Ruta de la imagen correspondiente a imagen1.
            ubicacion: "Galicia", // Ubicación de la propiedad correspondiente a imagen1.
            precio: "3.5 Millones/€" // Precio de la propiedad correspondiente a imagen1.
        },
        imagen2: {
            ruta: "images/22.jpg", // Ruta de la imagen correspondiente a imagen2.
            ubicacion: "Pais vasco", // Ubicación de la propiedad correspondiente a imagen2.
            precio: "5 Millones/€" // Precio de la propiedad correspondiente a imagen2.
        },
        imagen3: {
            ruta: "images/33.jpg", // Ruta de la imagen correspondiente a imagen3.
            ubicacion: "Sanlucar de barrameda", // Ubicación de la propiedad correspondiente a imagen3.
            precio: "3 Millones/€" // Precio de la propiedad correspondiente a imagen3.
        },
        imagen4: {
            ruta: "images/44.jpg", // Ruta de la imagen correspondiente a imagen4.
            ubicacion: "Almeria", // Ubicación de la propiedad correspondiente a imagen4.
            precio: "2.5 Millones/€" // Precio de la propiedad correspondiente a imagen4.
        }
    };

    // Obtención de la ruta, ubicación y precio según el dato proporcionado.
    let foto = fotos[dato].ruta;
    let ubicacion = fotos[dato].ubicacion;
    let precio = fotos[dato].precio;

    // Apertura de una nueva ventana.
    let miventana = window.open('', '', 'width=600,height=400');
    miventana.document.open(); // Apertura del documento de la ventana.
    
    // Escritura del código HTML en la ventana.
    miventana.document.write('<html>');
    miventana.document.write('<head>');
    miventana.document.write('</head>');
    miventana.document.write('<body>');
    miventana.document.write('<h1>Detalles de la imagen</h1>');
    miventana.document.write('<h2>Ubicación: ' + ubicacion + '</h2>'); // Mostrar la ubicación en la ventana.
    miventana.document.write('<h2>Precio: ' + precio + '</h2>'); // Mostrar el precio en la ventana.
    miventana.document.write('<img src="' + foto + '"><br>'); // Mostrar la imagen en la ventana.
    miventana.document.write('<input type="button" value="Cerrar" onClick="window.close()">'); // Botón para cerrar la ventana.
    miventana.document.write('</body>');
    miventana.document.write('</html>');
    miventana.document.close(); // Cerrar el documento de la ventana.
}