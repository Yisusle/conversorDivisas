    'use_strict'

    document.addEventListener('DOMContentLoaded', function () {
        var countrys;

        $(document).ready(function () {
        
            getPaises()
                .then(function (data) { return data.json(); }) //convertir
                .then(function (db) {
                paises = db.iva_paises; //Guardar datos
            
                return getPaises();
            }).then(function (data) { return data.json(); })
                .then(function (countrys) {
            
            })
                .catch(function (error) {
                alert("Error en las peticiones.");
                console.log(error);
            });

            function getPaises() {
                return fetch('');
            }

        });

});