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