
class Diputado{
    constructor(nombre,apellido,DNI,edad,partido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.setDNI(DNI);
        this.setEdad(edad);
        this.partido = partido;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getApellido(){
        return this.apellido;
    }

    setApellido(apellido){
        this.apellido = apellido
    }

    getDNI(){
        return this.DNI;
    }

    setDNI(DNI){
        let patron = /^\d{8}[A-Z]$/;
        if(patron.test(DNI)){
            let numero = parseInt(DNI.substr(0,8),10);
            let letra = DNI.charAt(8).toUpperCase();
            let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
            let indice = numero % 23;
            let letraEsperada = letras.charAt(indice);
            if(letra === letraEsperada){
                return (this.DNI = DNI);
            }         
        }
        return (this.DNI = "incorrecto");
    }

    getEdad(){
        return this.edad
    }

    setEdad(edad){
        if(Number.isInteger(edad) && edad > 17 && edad < 65){
            this.edad = edad;
        }else{
            this.edad = "Incorrecto";
        }
    }

    getPardido(){
        return this.partido;
    }
    setPartido(partido){
        this.partido = partido;
    }

    toString(){
        return `Nombre: ${this.nombre}, Apellidos: ${this.apellido}, DNI: ${this.DNI}, Edad: ${this.edad}, Partido: ${this.partido}`;
    }

}

const diputado1 = new Diputado("Herminio", "Cabezas", "49190988S", 3, "Verde");
const diputado2 = new Diputado("Manolo", "Lopez", "52334295B", 60, "Azul");
const diputado3 = new Diputado("Jacobo", "Albertos", "31665729L", 18, "Amarillo");
const diputado4 = new Diputado("Lola", "Ramirez", "31665729P", 15, "Amarillo");

let parlamento = [diputado1,diputado2,diputado3,diputado4];

parlamento.sort((a,b)=>a.edad - b.edad);

for(let x = 0; x < parlamento.length; x++){
    document.write(parlamento[x].toString() +"<br>");
}