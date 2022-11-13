var storageUser = JSON.parse(localStorage.getItem("usuarioLog"))
console.log(storageUser)
const app = new Vue({
    el:`#app`,
    data: {
        nombre:"",
        url:""
    }
})

    if(storageUser != null) {
      app.nombre = storageUser.usuarioL,
      app.url = "#"
    } else {
        app.nombre = "LOGIN",
        app.url = "./login.html"
    }
    console.log(storageUser.usuarioL)