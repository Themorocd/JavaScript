
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