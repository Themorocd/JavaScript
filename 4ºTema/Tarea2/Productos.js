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