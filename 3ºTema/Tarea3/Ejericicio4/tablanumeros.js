for(let x = 0; x <= 20; x++){
    document.write(x+" ");

    if(x % 3 === 0){
        document.write("multiplo de 3 ");
    }
    if(x % 5 === 0){
        document.write("multiplo de 5 ");
    }
    if(x % 7 === 0){
        document.write("multiplo de 7 ");
    }

    document.write("<br>");

    if(x % 10 === 0 && x!==20 ){
        document.write("<hr>");
    }

}

