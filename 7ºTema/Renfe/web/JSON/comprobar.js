/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


window.onload = iniciar;

peticion = null;

let texto; 

let elementoseleccionado = -1;

let cachesugerencias ={};

let sugerencias = null;

function iniciar(){
    
    document.getElementById("texto").onkeyup = autocompletar;
    document.getElementById("texto").focus();
     
}

function autocompletar(event){
    
    let tecla = event.keyCode;
    
    if(tecla == 40){
        
        if(elementoseleccionado + 1 < sugerencias.length){
            
            elementoseleccionado ++;
       
    }
    mostrarsugerencias();
 
    } else if(tecla == 38){
        
        if(elementoseleccionado > 0 ){
            
            elementoseleccionado --;
            
        }
        mostrarsugerencias();
        
    } else if(tecla == 13){
        
        seleccionaElemento();
        
    }else{
        texto = document.getElementById("texto").value;
        
        if(tecla == 8 && texto == ""){
            
            sugerencias = null;//para evitar que al darle intro sin nada me pinte algo
            
            borrarlista();
            
            return;
            
        }
        
        
        if(cachesugerencias[texto] == null){
           
            peticion = new XMLHttpRequest();
            
            borrrarlista();
            
            peticion.onreadystatechange = procesarespuesta;
            
            peticion.open("POST","autocompletar,jsp",true);
            
            peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            let query = creaquery();
            
            peticion.send(creaquery());
            
        } else{
            
            sugerencias = cachesugerencias[texto];
            
            actualizarsugerencias();
        }
        
        
        
    }
    
}

function creaquery(){
    
    
    texto = document.getElementById("texto").value;
    
    return "texto="+encodeURIComponent(texto)+"&nocache="+Math.random();
    
    
}

function procesarespuesta(){
    
    if(peticion.readyState == 4 && peticion.status == 200){
        
        let respuestaJSON = peticion.responseText;
        
        sugerencias = eval("("+respuestaJSON+")");
        
        if(sugerencias.length == 0){
            sinresultados();
        }else{
            cachesugerencias[texto] = sugerencias;
            actualizarsugerencias();
        }
        
        
        
        
    }
    
    
}

function sinresultados(){
    
    document.getElementById("texto").innerHTML="No existen resultados";
    
    document.getElementById("texto").style.display = "block";
    
    
}

function actualizarsugerencias(){
    
    
    elementoseleccionado = -1;
    
    mostrarsugerencias();
    
}


function seleccionaElemento(){
    
}