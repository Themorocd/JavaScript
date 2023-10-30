function openCalculator() {
    let myWindow = window.open("", "", "width=400, height=400");
    myWindow.document.write("<p>Calculadora</p>");
    myWindow.document.write("<input type='number' id='num1' placeholder='Primer número'><br><br>");
    myWindow.document.write("<input type='number' id='num2' placeholder='Segundo número'><br><br>");
    myWindow.document.write("<button onclick='calculate()'>Calcular</button><br><br>");
    myWindow.document.write("<p id='result'></p>");

    myWindow.calculate = function() {
        let num1 = parseFloat(myWindow.document.getElementById('num1').value);
        let num2 = parseFloat(myWindow.document.getElementById('num2').value);

        myWindow.document.getElementById('result').innerHTML =
            "Suma: " + (num1 + num2) + "<br>" +
            "Resta: " + (num1 - num2) + "<br>" +
            "Multiplicación: " + (num1 * num2) + "<br>" +
            "División: " + (num1 / num2);


            setInterval(function() {
                var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                myWindow.document.body.style.backgroundColor = randomColor;
            }, 3000);
    };
}