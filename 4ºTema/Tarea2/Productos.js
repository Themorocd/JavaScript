/*
Cree un script que defina un objeto llamado Producto_alimenticio . Este objeto debe
presentar las propiedades código , nombre y precio, además del método imprimeDatos , el
cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdelas en un array. Con la ayuda
del bucle for, utilice el método imprimeDatos para mostrar por pantalla los valores de los
tres objetos instanciados.
*/
function productos_alimenticios(codigo,nombre,precio){
    this.codigo = codigo;
    this.nombre = nombre;
    this. precio = precio;
}

productos_alimenticios.prototype.imprimedatos=function(){
    return("codigo:"+this.codigo+", nombre:"+this.nombre+", precio:"+this.precio);
}

let productos = new Array(3);

productos[0] = new productos_alimenticios("2","sandia","1,80");
productos[1] = new productos_alimenticios("5","piña","2,50");
productos[2] = new productos_alimenticios("20","tomatico","2,80");

for (let x = 0; x < productos.length; x++) {
    
    document.write(productos[x].imprimedatos()+"<br>");
}