/*
Vamos a crear una clase llamada Diputado. Con varios diputados haremos
un array llamado arrayParlamento.

1. La clase Diputado va a estar compuesta por las siguientes propiedades.
1. Nombre. El nombre de pila.
2. Apellidos. Los apellidos.
3. DNI. El DNI. Debe ser correcto y para comprobarlo
4. Edad. Debe ser mayor que 0 y menor de 200.
5. Partido. Siglas del partido al que pertenece.
2. El constructor deberá ser algo similar a: Diputado (nombre, apellidos, dni,
edad,partido)
3. Diputado debe disponer de diversos métodos. Unos serán get que
devolverán el valor indicado, y otros serán set que establecerán un nuevo
valor en la propiedad a la que se refieren. Estos serán los métodos:

1. getNombre() -> Devuelve el nombre
2. setNombre(nuevoNombre)
3. getApellidos() -> Devuelve los apellidos.
4. setApellidos(nuevosApellidos)
5. getDNI()
6. setDNI(NuevoDNI) -> Devuelve false si no se ha podido
cambiar, true si se ha podido cambiar porque no es correcto
ese DNI)
7. getEdad() -> Devuelve la edad.
8. setEdad()
9. setPartido()
10. getPartido() -> Devuelve el partido.
11. toString() -> Mostrar todos las propiedades de Diputado.
4. Añada los siguientes elementos al array y ordénelos por edad.

"Herminio","Cabezas",12349,30,"Verde"
"Manolo","López",12349,20,"Azul"
"Jacobo","Sánchez",12349,53,"Amarillo"
(ayuda: https://www.w3schools.com/js/js_array_sort.asp)
*/

function diputados(nombre, apellidos, dni, edad, partido) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.edad = edad;
    this.partido = partido;

    this.getNombre = function () {
        return this.nombre;
    };

    this.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    this.setNombre(nombre);

    this.getApellidos = function () {
        return this.apellidos;
    };

    this.setApellidos = function (apellidos) {
        this.apellidos = apellidos;
    };
    this.setApellidos(apellidos);

    this.getDni = function () {
        return this.dni;
    };

    this.setDni = function (dni) {
        let letras =  ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

        dni = dni.replaceAll(" ", "");

        let numdni = 0;

        numdni = dni.substr(0, 8);

        let letradni = dni.charAt(8);

        let resto = numdni % 23;

        if (letras[resto] != letradni) {
            this.dni = "dni no valido";
        } else {
            this.dni = dni;
        }
    };
    this.setDni(dni);

    this.getEdad = function () {
        return this.edad;
    };

    this.setEdad = function (edad) {
        if (edad > 17 && edad <= 65) {
            this.edad = edad;
        } else {
            this.edad = "Eres muy joven o muy viejo";
        }
    };
    this.setEdad(edad);

    this.getPartido = function () {
        return this.partido;
    };

    this.setPartido = function (partido) {
        this.partido = partido;
    };
    this.setPartido(partido);
}

diputados.prototype.toString = function () {
    return (
        "Nombre: " + this.getNombre() +", Apellidos: " +this.getApellidos() +", Dni: " +this.getDni() +", Edad: " +this.getEdad() +", Partido: " +this.getPartido()
    );
};

let parlamento = new Array();
let diputado1 = new diputados("Herminio", "Cabezas", "47562765F", 30, "Green");
let diputado2 = new diputados("Manolo", "Lopez", "47562765F", 20, "blue");
let diputado3 = new diputados("Jacobo", "Sanchez", "47562765F", 53, "yellow");
parlamento[0] = diputado1;
parlamento[1] = diputado2;
parlamento[2] = diputado3;

parlamento.sort((a,b)=>{//asi lo ordeno de menor a mayor, si lo quiero de mayor a menor solo cambiar el -1 y el 1 de sitio
    if(a.edad < b.edad){
        return -1;
    }else{
        return 1;
    }
    return 0;
});

for (let x = 0; x < parlamento.length; x++) {
    document.write(parlamento[x].toString() + "<br>");
}
