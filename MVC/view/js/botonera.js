<<<<<<< HEAD
$(document).ready(function(){
    alert("absurdismo query")
=======
$(document).ready(function() {
    // alert('"Hola absurdismo query')
>>>>>>> 6b191e019c4127a61bb60d31f56bd3d872df7e42

    //
    $(".boton").click(function() {
        let catEventos = $(this).attr("category");
        console.log(catEventos);

        //Ocultando Productos

        $(".product").hide();

        //Mostrando Productos

        $('.product[category="' + catEventos + '"]').show();

        $('.product[category="' + catEventos + '"]').addClass('.product')

    });

    //Mostrando todos los productos

    $('.botontodos[category="todos"]').click(function() {
        $('.product').show();
    })

});