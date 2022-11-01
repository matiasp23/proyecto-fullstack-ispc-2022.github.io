$(document).ready(function(){
    

//
    $(".boton").click(function(){
     let catEventos = $(this).attr("category");
     console.log(catEventos);

     //Ocultando Productos

     $(".product").hide();

    //Mostrando Productos

     $('.product[category="'+catEventos+'"]').show();

     $('.product[category="'+catEventos+'"]').addClass('.product')

    });
    
    //Mostrando todos los productos
    
    $('.botontodos[category="todos"]').click(function(){
        $('.product').show();
    })

});

