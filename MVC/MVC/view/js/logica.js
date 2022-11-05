document.querySelector("#crearevento").addEventListener("click",guardarEvento);

function guardarEvento(){
    var ynombre= document.querySelector("#Nombre-del-Evento").value,
        yfecha= document.querySelector("#Fecha").value,
        ygenero= document.querySelector("#Genero").value,
        ycategoria= document.querySelector("#Categoria").value,
        /*yimagen= document.querySelector("#foto").value,*/
        yprovincia= document.querySelector("#Provincia").value,
        ylocalidad=document.querySelector("#Localidad").value,
        ycalle= document.querySelector("#Calle").value,
        ynumero= document.querySelector("#Numero").value,
        yredes= document.querySelector("#Redes-Sociales").value,
       ydescripcion= document.querySelector("#Descripcion-del-evento").value;

    
agregarEvento(ynombre,yfecha,ygenero,ycategoria,yprovincia,ylocalidad,ycalle,ynumero,yredes,ydescripcion);
   

}