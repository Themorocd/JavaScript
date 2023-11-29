/*
Cree un script que defina un objeto llamado coches. Este objeto debe presentar las
propiedades código , nombre y precio, además del método imprimeDatos , el cual escribe
por pantalla los valores de sus propiedades.
*/
function coche(codigo, nombre, precio){
    //propiedades del coche
    this.codigo=codigo;
    this.nombre=nombre;
    this.precio=precio;
}

coche.prototype.imprimedatos=function(){
    //imprimo 
    return("codigo: "+this.codigo+", nombre:" +this.nombre+", precio:"+this.precio);
}
let coche = new coche(40,"Volkswagen",1500);//instancio el objeto y le agrego los atributos
document.write(coche.imprimedatos());//pinto por pantalla