    let numero = parseInt(prompt("Introduzca un numero entero"))
    // Verificar si el valor ingresado es un número válido
    if(!isNaN(numero)){
        let num = [];// Crear una lista vacía para almacenar los números


        let contador = 0;


        while (contador <= numero){// Usar un bucle while para agregar números desde 0 hasta el valor ingresado

            num.push(contador);// Agregar el número actual a la lista
            contador++;

        }

        let separacomas = num.join(", ");// Utilizar join() para unir los números con comas y mostrarlos

        document.write("Lista de numeros: "+separacomas);


    }else{
        document.write("El valor ingresado no es un entero valido")
    }

