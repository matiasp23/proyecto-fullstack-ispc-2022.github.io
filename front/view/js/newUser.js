
document.querySelector("#nuevoUsuario").addEventListener("click", guardarUsario);
document.querySelector("#login").addEventListener("click", login);
function guardarUsario(){
       var nombreCompletoUs= document.querySelector("#nombre").value,
        correoUs= document.querySelector("#correo").value,
        usuarioUs= document.querySelector("#usuarioN").value,
        contraseñaUs= document.querySelector("#contraseñaN").value;
           
nuevoUsuario(nombreCompletoUs,correoUs,usuarioUs,contraseñaUs);
}
function login(){
    var usuarioEx= document.querySelector("#usuarioExistente").value,
    contraseñaEx= document.querySelector("#contraseñaExistente").value;

    usuarioExistente(usuarioEx, contraseñaEx);
}
