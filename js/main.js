    'use_strict'
        var monedaUno = document.getElementById('moneda-uno');
        var monedaDos = document.getElementById('moneda-dos');
        var cantidadUno = document.getElementById('cantidad-uno');
        var cantidadDos = document.getElementById('cantidad-dos');
        var intercambio = document.getElementById('intercambio');
        var intercambiarBtn = document.getElementById('btn-intercambiar');

        var resetButton = document.getElementById('btnreset');

        function calculate() {
            var moneda_uno = monedaUno.value;
            var moneda_dos = monedaDos.value;
        
            // Realizar la solicitud a la API
            fetch(`https://v6.exchangerate-api.com/v6/03cca4b283992eff26e0fff1/latest/${moneda_uno}`)
                .then(res => res.json())
                .then(data => {
                    var taza = data.conversion_rates[moneda_dos];
                    mostrarResultado(moneda_uno, moneda_dos, taza);
                })
                .catch(error => {
                    console.error('Error en la solicitud de la API:', error.message);
                    alert('Error en la solicitud de la API:', error.message);
                });
        }
    
        function mostrarResultado(moneda_uno, moneda_dos, taza) {
            intercambio.innerText = `1 ${moneda_uno} = ${taza} ${moneda_dos}`;
            cantidadDos.value = (cantidadUno.value * taza).toFixed(2);
        }
        
        
        monedaUno.addEventListener('change', calculate);
        cantidadUno.addEventListener('input', calculate);
        monedaDos.addEventListener('change', calculate);
        cantidadDos.addEventListener('change', calculate);

        intercambiarBtn.addEventListener('click', function(event) {
            event.preventDefault();
            var temp = monedaUno.value;
            monedaUno.value = monedaDos.value;
            monedaDos.value = temp;

            var tempCantidad = cantidadUno.value;
            cantidadUno.value = cantidadDos.value;
            cantidadDos.value = tempCantidad;
            
            this.blur();
            
            calculate();
        } );






