
document.querySelector("#crearevento").addEventListener("click",guardarEvento);

function guardarEvento(e){
       e.preventDefault();
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

       if(ynombre!=0 && yfecha!=0 && ygenero!=0 && ycategoria!=0 && 
           yprovincia!=0 && ylocalidad!=0 && ycalle!=0 && ynumero!=0 
           && yredes !=0 && ydescripcion !=0 ){
                  
              Swal.fire({
                     title: "Perfecto :)" ,
                     text:"Tu evento esta en revision",
                     icon: "success"  ,
                     width:"40%",
                     backdrop:false,
                     padding:"1rem",

                     
                     customClass:{
                            title:"titulo-clase"
                     }
              });
              agregarEvento(ynombre,yfecha,ygenero,ycategoria,yprovincia,ylocalidad,ycalle,ynumero,yredes,ydescripcion);
    
                  
           }
           else{
              
              Swal.fire({
                     title: "OH NO :(" ,
                     text:"Faltan campos por rellenar",
                     icon: "warning"  ,
                     width:"40%",
                     backdrop:false,
                     padding:"1rem",
              });
           }
    
      
}

