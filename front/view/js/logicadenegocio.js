$(document).ready(

    $.ajax({
        url:"../js/evento.json",

        success: function(info) {
            var data = info.response
            misEventos(data)

            console.log(data);

        }

    })

)



var evento = [];


/*funcion para agregar un objeto evento al Json*/
function agregarEvento(xnombre, xfecha, xgenero, xcategoria, xprovincia, xlocalidad, xcalle, xnumero, xredessociales, xdescripcionevento) {

    var nuevoEvento =

        {
            nombre: xnombre,
            fecha: xfecha,
            genero: xgenero,
            categoria: xcategoria,
            provincia: xprovincia,
            localidad: xlocalidad,
            calle: xcalle,
            numero: xnumero,
            redes: xredessociales,
            descripcion: xdescripcionevento
        };

    /*evento.push(JSON.stringify(nuevoEvento));*/
    /*evento.push(nuevoEvento);*/
    localStorage.setItem("eventos", JSON.stringify(nuevoEvento));



    /*var stringArreglo = localStorage.getItem("eventos");
    var arreglo =JSON.parse(stringArreglo);
    localStorage.setItem("eventos", arreglo)*/
}




function misEventos(event) {

    var app = new Vue({
        el: "#app",
        data: {
            eventos: [],
            evento1: [],
            event: []
        }

    })

    /*app.eventos.push(event)*/

    for (i = 0; i <= event.length - 1; i++) {
        app.eventos.push(event[i]);

    }

    if (localStorage.getItem("eventos") != 0) {
        app.evento1 = app.evento1 + JSON.parse(localStorage.getItem("eventos"));


    }

    /*app.event= Object.assign(app.evento1);
    
    app.eventos=app.eventos+app.event

    console.log(app.event)
    console.log(app.evento1)
    console.log(app.eventos)*/
}

console.log(localStorage.getItem("eventos"));