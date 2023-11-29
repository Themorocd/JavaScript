/* 
Crear un programa para gestionar una lista de libros con propiedades controladas y métodos específicos.

Definir un objeto Libro con las siguientes propiedades:

- titulo (cadena de texto)
- autor (cadena de texto)
- genero (cadena de texto)
- paginas (número entero)
- isbn (cadena de texto, identificador único del libro)
- Restricciones y validaciones:

El título y el autor deben tener al menos 3 caracteres.
El género debe ser una de las siguientes opciones: "Ficción", "No ficción", "Drama", "Ciencia ficción", "Misterio", "Fantasía".
El número de páginas debe ser un número positivo mayor que cero.
El ISBN debe ser un identificador único para cada libro.
Crear un array llamado biblioteca que almacenará objetos del tipo Libro.

*/

function libros(titulo, autor, genero, paginas, isbn) {

    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.paginas = paginas;
    this.isbn = isbn;

    this.getTitulo = function () {
        return this.titulo;
    }

    this.setTitulo = function (titulo) {
        if (nuevoTitulo.length >= 3) {
            this.titulo = titulo;
        } else {
            this.titulo = "El título debe tener al menos 3 caracteres";
        }
    }

    this.getAutor = function () {
        return this.autor;
    }

    this.setAutor = function (autor) {
        if (nuevoAutor.length >= 3) {
            this.autor = autor;
        } else {
            this.autor = "El autor debe tener al menos 3 caracteres.";
        }
    }

    this.getGenero = function () {
        return this.genero;
    }

    this.setGenero = function (genero) {
        const generosValidos = ["Ficción", "No ficción", "Drama", "Ciencia ficción", "Misterio", "Fantasía"];
        if (generosValidos.includes(genero)) {
            this.genero = genero;
        } else {
            this.genero = "El género especificado no es válido.";
        }
    }

    this.getPaginas = function () {
        return this.paginas;
    }

    this.setPaginas = function (paginas) {
        if (paginas > 0) {
            this.paginas = paginas;
        } else {
            this.paginas = "El número de páginas debe ser mayor que cero";
        }
    }

    this.getIsbn = function () {
        return this.isbn;
    }

    this.setIsbn = function (isbn) {
        const isbnRegExp = /^(978|979)\d{10}$/;

        if (isbnRegExp.test(isbn)) {
            this.isbn = isbn;
        } else {
            this.isbn = "Error en el isbn";
        }
    }


}



libros.prototype.toString = function () {
    return ("titulo: " + this.getTitulo() + ", Autor: " + this.getAutor() + ", Genero: " + this.getGenero() + ", Paginas: " + this.getPaginas() + ", ISBN: " + this.getIsbn());
}


let biblioteca = new Array();

let libros1 = new libros('El nombre del viento', 'Patrick Rothfuss', 'Fantasía', 662, '9788401352836');
let libros2 = new libros('1984', 'George Orwell', 'Ciencia ficción', 328, '978-0451524935');
let libros3 = new libros('Cien años de soledad', 'Gabriel García Márquez', 'Ficción', 417, '978-3-16-148410-0');
biblioteca[0] = libros1;
biblioteca[1] = libros2;
biblioteca[2] = libros3;

for (let x = 0; x < biblioteca.length; x++) {
    document.write(biblioteca[x].toString() + "<br>");
}