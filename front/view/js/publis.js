//console.log("probanding");
var app ={};
var miCallback = datos =>{
    console.log(datos);
    app.publi=datos;
    var html = ""
    app.publi.map(publicar => {
        html+="<div class='card'>'"+publicar.img+"'";
        html+=publicar.titulo;
        html+=publicar.texto;
        html+="'"+publicar.boton+"'</div>";

        /*html+="<img src='"+publicar.img+"' ></img>";
        for(let propiedad of Object.keys(publicar)) {
            html+="<p>"+propiedad+": "+publicar[propiedad]+"</p>";
    
        }*/
        

    })

 

document.getElementById("results").innerHTML = html;

}

   