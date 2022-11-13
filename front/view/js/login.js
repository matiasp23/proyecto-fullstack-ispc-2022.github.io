document.getElementById("register").addEventListener("click", register);
document.getElementById("iniciarSesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);

// Declaración de variables
var contenedorLoginRegister = document.querySelector(".contenedorLoginRegister")
var formularioLogin = document.querySelector(".formularioLogin")
var formularioRegister = document.querySelector(".formularioRegister")
var cajaTraseraLogin = document.querySelector(".cajaTraseraLogin")
var cajaTraseraRegister = document.querySelector(".cajaTraseraRegister")

function anchoPagina(){
    if(window.innerWidth > 850){
        cajaTraseraLogin.style.display = "block";
        cajaTraseraRegister.style.display = "block";
    }else{
        cajaTraseraRegister.style.display = "block"
        cajaTraseraRegister.style.opacity = "1"
        cajaTraseraLogin.style.display = "none"
        formularioRegister.style.display = "none"
        formularioLogin.style.display = "block"
        contenedorLoginRegister.style.left = "0px"
    }
}
anchoPagina()
function iniciarSesion(){
    if(window.innerWidth > 850){
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left="10px";
        formularioLogin.style.display = "block";
        cajaTraseraRegister.style.opacity = "1";
        cajaTraseraLogin.style.opacity = "0";
    }else{
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left="0px";
        formularioLogin.style.display = "block";
        cajaTraseraRegister.style.display= "block";
        cajaTraseraLogin.style.display= "none";
    }
}

function register(){
    if(window.innerWidth > 850){
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left="410px";
        formularioLogin.style.display = "none";
        cajaTraseraRegister.style.opacity = "0";
        cajaTraseraLogin.style.opacity = "1";
    }else{
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left="0px";
        formularioLogin.style.display = "none";
        cajaTraseraRegister.style.display = "none";
        cajaTraseraLogin.style.display = "none"
        cajaTraseraLogin.style.opacity = "1";
    }

}
//Register
var usuariosLogueados = [];

function nuevoUsuario(nombreCompletoUs,correoUs,usuarioUs,contraseñaUs){
    var newUser ={
         nombre: nombreCompletoUs,
         correo: correoUs,
         usuario: usuarioUs,
         contraseña: contraseñaUs
    };
    console.log(newUser)
    usuariosLogueados.push(newUser)
    localStorageUserList(usuariosLogueados)
    console.log(usuariosLogueados)
    alert("Ahora inicie sesion con su usuario")
}
console.log(localStorage.getItem("localListUser"))
console.log(localStorage.getItem("usuarioLog"))
function getUser (){
    var storeList= localStorage.getItem("localListUser");
    console.log(storeList);
    if(storeList == null){
        usuariosLogueados = [];
    }else{
        usuariosLogueados= JSON.parse(storeList);
    }
    return usuariosLogueados
}
function localStorageUserList(usuariosLogueados){
    localStorage.setItem("localListUser", JSON.stringify(usuariosLogueados));
}
//Login

function usuarioExistente(usuarioEx, contraseñaEx){
    var usuario={
    usuarioL : usuarioEx,
    contraseñaL: contraseñaEx
    }
    login(usuario)

    console.log(usuario)
    alert("usuario")
}
function login(usuario){
    usuariosLogueados = JSON.parse(localStorage.getItem("localListUser"))
    for (i=0; i <= usuariosLogueados.length-1; i++){
        if(usuariosLogueados != null) {
          if(usuariosLogueados[i].usuario === usuario.usuarioL & usuariosLogueados[i].contraseña === usuario.contraseñaL){
              localStorage.setItem("usuarioLog", JSON.stringify(usuario))
              window.location.href = '../home.html';
              alert("Bienvenid@ "+(usuario.usuarioL))
          }else{
              alert("usuario o contraseña incorrecto")
          }
        } else {
            alert("no hay usuarios registrados")
        }
    }
}


