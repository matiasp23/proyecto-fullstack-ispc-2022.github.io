
document.querySelector("#crearevento").addEventListener("click",guardarEvento);

function guardarEvento(e){
       
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
              e.preventDefault();
              Swal.fire({
                     title: "Perfecto :)" ,
                     text:"Tu evento esta en revision",
                     icon: "success"  ,
                     width:"40%",
                     backdrop:false,
                     padding:"1rem",
                     timer:5000,
                     confirmButtonColor:"#008F95",
                     iconColor:"#008F95"      
       
              });
              
              agregarEvento(ynombre,yfecha,ygenero,ycategoria,yprovincia,ylocalidad,ycalle,ynumero,yredes,ydescripcion);
    
                  
           }
           else{
              
              e.preventDefault();
              Swal.fire({
                     text:"Faltan campos por rellenar",
                     icon: "warning"  ,
                     width:"40%",
                     title: ' OH NO :(',
                     backdrop:false,
                     padding:"1rem",
                     confirmButtonColor:"#EB6E80",
                     iconColor:"#EB6E80",      
              });
           }
    
      
}

