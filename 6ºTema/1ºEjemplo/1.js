window.onload = iniciar;

function iniciar(){

    //Creamos 3 elementos nuevos p,b,br

    let elementoP = document.createElement('p');
    let elementoB = document.createElement('b');
    let elementoBR = document.createElement('br');

    //Le asignamos un nuevo atributo title al elemento P que hemos creado.

    elementoP.setAttribute('title','Parrafo creado desde js');

    //Preparamos los nodos de texto

    let text1 = document.createTextNode('con js se ');
    let text2 = document.createTextNode('pueden realizar ');
    let text3 = document.createTextNode('un monton ');
    let text4 = document.createTextNode('de cosas sobre el documento');

    //Añadimos al elemento B los nodos de texto2, elemento BR y texto 3

    elementoB.appendChild(text2);
    elementoB.appendChild(elementoBR);
    elementoB.appendChild(text3)

    //Añadimos al elemento P los nodos de text1, elemento B y text4

    elementoP.appendChild(text1);
    elementoP.appendChild(elementoB);
    elementoP.appendChild(text4);

    //Insertamos el nuevo parrafo como un nuevo hijo de nuestro parrafo
    document.getElementById('parrafito').appendChild(elementoP);
}

