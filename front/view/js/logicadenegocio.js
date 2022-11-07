var evento=[];

fetch("../js/json.json")
    .then(res => res.json()) // el método .json() analiza la respuesta JSON en un objeto literal JS
    .then(data => misEventos(data));

/*funcion para agregar un objeto evento al Json*/
function agregarEvento(xnombre,xfecha,xgenero,xcategoria,xprovincia,xlocalidad,xcalle,xnumero,xredessociales,xdescripcionevento){
    
    var nuevoEvento=
    {
        nombre : xnombre,
        fecha : xfecha,
        genero : xgenero,
        categoria : xcategoria,
        provincia : xprovincia,
        localidad :xlocalidad,
        calle : xcalle,
        numero : xnumero,
        redes : xredessociales,
        descripcion : xdescripcionevento
    };
    evento.push(JSON.stringify(nuevoEvento));
    /*evento.push(nuevoEvento);*/
    localStorage.setItem("usuario", JSON.stringify(evento));
    console.log(evento);
    
    
};


function misEventos(data){

    var app = new Vue({
        el: "#app",
        data: {eventos:[]} })   
}
app.eventos.push(evento)
let getitem = JSON.parse(localStorage.getItem("usuario"))
console.log(localStorage.getItem("usuario"));


/*function crearEvento(){
   
    document.getElementById("nuevo-evento").addEventListener("click", nuevoEvento,false);
}
console.log("hola")

function nuevoEvento(event){
    event.preventDefault();
    var nombre=document.getElementById("Nombre del Evento").value;
    var fechaevento=document.getElementByplaceholder("Fecha").value;
    var generoevento=document.getElementByplaceholder("Genero").value;
    var categoriaevento=document.getElementByplaceholder("Categoria").value;
    /*var imgevento=document.getElementByplaceholder("foto").value;
    var provinciaevento=document.getElementByplaceholder("Provincia").value;
    var localidadevento=document.getElementByplaceholder("Localidad").value;
    var calleevento=document.getElementByplaceholder("Calle").value;
    var numeroevento=document.getElementByplaceholder("Numero").value;
    var redesevento=document.getElementByplaceholder("Redes Sociales").value;
    var descripcion=document.getElementByplaceholder("Descripcion del evento").value;

    var eventoNuevo={ nombredeeevento:nombre, fecha:fechaevento,genero:generoevento,
                    categoria:categoriaevento,img:imgevento,provincia:provinciaevento,
                    localidad:localidadevento,calle:calleevento,numero:numeroevento,
                redessociales:redesevento,descripcionevento:descripcion};
    
    Eventos.push(eventoNuevo);
    
 
}

console.log(Eventos);*/