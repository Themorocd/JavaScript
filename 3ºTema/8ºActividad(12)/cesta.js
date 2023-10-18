let ventanas = {};

        function mostrarPrecio(fruta, precio) {
            if (!ventanas[fruta]) {
                let ventana =  window.open("", fruta, "width=200,height=100");
                ventana.document.write(`<p>${fruta}: ${precio.toFixed(2)} euros</p>`);
                ventanas[fruta] = ventana;
            }
        }

        function borrarCompra() {
            for (let fruta in ventanas){
                ventanas[fruta].close();
            }
            ventanas = {};
            window.open("", "", "width=200,height=100").document.write(`<p>Se ha borrado toda la compra</p>`);
        }