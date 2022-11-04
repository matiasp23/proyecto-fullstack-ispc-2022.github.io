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

// validacion que no funca

const btnEnviar = document.getElementById('editar');

const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('usuario');
  const direcciónEmail = document.getElementById('email');
  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    usuario.focus();
    return false;
  }
    
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    emailAddress.focus();
    return false;
  }
  swal('Los datos se actualizaron correctamente','','success');
  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);


// cambiar boton y alert de confirmacion
function FbotonOn() {
  var uno = document.getElementById('editar');
  if (uno.innerHTML == 'Editar'){
    uno.innerHTML = 'Confirmar';
    swal('Gercarrioner','the best top laner','error');
  }
    else {
    swal('Los datos se actualizaron correctamente','','success');
  }
}

document.getElementById('editar').addEventListener('click', function(e) {
  editar.disabled = true;