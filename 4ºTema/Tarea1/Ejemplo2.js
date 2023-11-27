String.prototype.trun=function(str){
    if (str <= 0 || str >= this.length) {
        //return prueba.slice(0,str-2)+"***";
        return this.toString(); // Si la posición es inválida, devuelve la cadena original
    } else {
        return this.slice(0, str - 2) + '*'.repeat(this.length - str + 2);
        // Devuelve la parte de la cadena hasta la posición 'str' - 1
        // y luego añade asteriscos para cubrir la longitud restante
    }
 }

 var prueba="Hola mundo";
 document.write(prueba.trun(5)+"<br>");
 document.write(prueba.slice(0,6)+"<br>");
 document.write(prueba.slice(0,(5-2))+"***");