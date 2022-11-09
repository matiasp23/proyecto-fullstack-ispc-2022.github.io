//accedemos a los form por ID
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var fechanac = document.getElementById('fechanac');
var usuario = document.getElementById('usuario');



// evento para el input button editar
document.getElementById('editar').addEventListener('click', function(e) {
nombre.disabled = false;
apellido.disabled = false;
email.disabled = false;
fechanac.disabled = false;
usuario.disabled = false;

});

// cambiar boton y alert de confirmacion
function FbotonOn() {
  var uno = document.getElementById('editar');
  if (uno.innerHTML == 'Editar'){
    uno.innerHTML = 'Confirmar';
   
    //swal('Gercarrioner',"Tiene Problemas con Js",'error');
          
  }
  
}
      

//validación GeR


function habilitar(){
  

  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const apellido = document.getElementById('apellido');
  const fechanac = document.getElementById('fechanac');
  var editar= false;

  if (nombre.value === "") {
    swal('Por favor, escribe tu Nombre.',"",'error');
    nombre.focus();
    return false;

    
  }
  if (apellido.value === "") {
    swal('Por favor, escribe tu Apellido',"",'error');    
    apellido.focus();
    return false;
  }

  if (fechanac.value === "") {
    swal('Por favor, escribe tu Fecha de Nacimiento.',"",'error');    
    fechanac.focus();
    return false;
  }
    
  if (email.value === "") {
    swal('Por favor, escribe tu correo electrónico',"",'error');    
    email.focus();
    return false;
  }

  var emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (!emailVálido(email.value)) {
    swal('Por favor, escribe un correo electrónico válido',"",'error');    
    emailAddress.focus();
    return false;
  }

 
  
  return true, swal('Los datos se actualizaron correctamente','','success'); //Se pueden enviar los datos del formulario al servidor
    
     
   
}