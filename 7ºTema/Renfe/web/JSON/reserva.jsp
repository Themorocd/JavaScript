<%-- 
    Document   : reserva
    Created on : 2 feb 2024, 22:12:27
    Author     : moro-
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <%
            //request.setCharacterEncoding("UTF-8");
            String origen = request.getParameter("provincias");
            System.out.println("origen: "+origen);
            String municipio = request.getParameter("texto");
            System.out.println("municipio: "+municipio);
            String fechaSalida = request.getParameter("fechasalida");
            System.out.println("fechaSalida: "+fechaSalida);
            String fechaRegreso = request.getParameter("fechavuelta");
            System.out.println("fechaRegreso: "+fechaRegreso);
            String regreso = request.getParameter("horarioRegreso");
            System.out.println("regreso: "+regreso);
            String salida = request.getParameter("horarioSalida");
            System.out.println("salida: "+salida);
            String adultos = request.getParameter("adultos");
            System.out.println("adultos: "+adultos);
            String ninos = request.getParameter("ninos");
            System.out.println("ninos: "+ninos);
            String bebes = request.getParameter("bebes");
            System.out.println("bebes: "+bebes);

        %>
        <div class="container p-3 position-absolute top-50 start-50 translate-middle rounded " style="width: 50%; background-color: #e1e3d8;">
            <div class="container rounded" style="background-color: white">
                <img src="images/renfe.JPG" width="600px" height="100px" alt="renfe"/>
            </div>
            <div class="container bg-light rounded mt-3 p-2">
                <div class="row">
                    <div class="col-6 ms-2 ">
                        <p class="fw-bold">ORIGEN</p>
                        <p class="fw-bold">DESTINO</p>
                    </div>
                    <div id="relativo" class="col-5 text-center">
                        <p><%=origen%></p>
                        <p><%=municipio%></p>
                    </div>
                </div>
            </div>
            <div class="container bg-light rounded mt-3 p-2">
                <div class="container">               
                    <div class="row" style="border-bottom: black 2px dotted">                   
                        <div class="col-8">                        
                            <p class="fw-bold text-start">FECHA DEL VIAJE</p>                       
                        </div>                    
                        <div class="col-4" style="border-left: black 2px dotted">
                            <p class="fw-bold text-start">HORARIOS</p>
                        </div>                   
                    </div>       
                </div>  
                <div class="container">
                    <div class="row" style="border-bottom: black 2px dotted">
                        <div class="col-4 text-center mt-3">                        
                            <p class="fw-bold">SALIDA</p>                       
                        </div>                    
                        <div class="col-4 mt-3" >
                            <p><%=fechaSalida%></p>
                        </div>  
                        <div class="col-4 text-center mt-3 "">
                            <p><%= salida%></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 text-center mt-3">                        
                            <p class="fw-bold">REGRESO</p>                       
                        </div>                    
                        <div class="col-4 mt-3" >
                            <p><%=fechaRegreso%></p>
                        </div>  
                        <div class="col-4 text-center mt-3 "">
                            <p><%= regreso%></p>
                        </div>
                    </div>
                </div>
            </div>   
            <div class="container  rounded mt-3 p-2" style="background-color: white">               
                <div class="container">                
                    <div class="row ">                  
                        <div class="col-4">
                            <p class="fw-bold text-center">ADULTOS</p>
                            <div class="row ">
                                <div class="col-6">
                                    <img class="rounded float-end" src="images/adulto.JPG" width="40px" height="40px" alt="adulto"/>
                                </div>
                                <div class="col-6">
                                    <p><%=adultos%></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4" style="border-left: black 2px dotted">
                            <p class="fw-bold text-center">NIÑOS 4 -13</p>
                            <div class="row">
                                <div class="col-6">
                                    <img class="rounded float-end" src="images/niño.JPG" width="40px" height="30px" alt="adulto"/>
                                </div>
                                <div class="col-6">
                                    <p><%=ninos%></p>
                                </div>
                            </div>
                        </div>                      
                        <div class="col-4" style="border-left: black 2px dotted">
                            <p class="fw-bold text-center">NIÑOS < 4</p>
                            <div class="row" >
                                <div class="col-6">
                                    <img class="rounded float-end" src="images/bebe.JPG" width="40px" height="40px" alt="adulto"/>
                                </div>
                                <div class="col-6">
                                    <p class=""><%=bebes%></p>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>               
            </div>            
        </div>
    </body>
</html>
