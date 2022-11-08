//INTENTO 1
//let div_usuarios = document.querySelector('#usuarios');
//let usuarios = [];
/*let informacion = [];
//let boton = document.querySelector('#boton');


fetch('https://api.mercadolibre.com/sites/MLA/search?q=') //https://api.mercadolibre.com/sites/MLA/search?q=#json
    .then(data=>data.json())
    .then(info=>{
        let informacion1 = info.data;
        console.log(informacion1);
        //listado()
    });

function listado(){
    informacion.map((user,i)=>{
        let nombre = document.createElement('p');
        nombre.innerHTML = user.id +". "+ user.first_name + " " + user.last_name + ": " + user.email;
        div_informacion.append(nombre);
        document.querySelector('.loading').style.display = "none";
    })
};    
*/

/*****************************************************************/
//INTENTO 2
/* const searchText = document.getElementsByClassName('buscador');
const result = document.getElementById('clearfix');

function debounce(fx) {
    let timeId;
    console.log(`entre al bounce y tiene este valor ${timeId}`);

    return function() {
        if (timeId) {
            clearTimeout(timeId);
            console.log("entre al time");
        }
        const context = this;
        const args = arguments;

        timeId = setTimeout(() => {
            fx.apply(context, args)
        }, 2000)
    }
}


let epoint = 'https://api.mercadolibre.com/sites/MLA/search?q=';


//FETCH POST
const searchCatgorias = async(producto) => {
    const res = await fetch(
        `${epoint}s=${producto}`
    );
    const data = await res.json();
    //return data; 
    const value = data.Search || []
    showData(value);
};

const searchProductoBounce = debounce(searchCatgorias)

const showData = (data) => {
        if (data.length === 0) {
            result.innerHTML = "Lo siento, no encontramos lo que busca"
            return
        }
        result.innerHTML = `<ul>
${data
    .map(
        () => 
        `<li>${categorias.Title}</li>`
    )
    .join('')}
    </ul>`;
}

function init(){

    searchText.addEventListener('input', (e) => {
        e.preventDefault();
        const searchValue = e.target.value.trim();
        if (!searchValue) {
            return;
        }
            searchProductoBounce(searchValue);
    });
};


init();
*/

//INTENTO 3 

let inputSearch = document.getElementById('buscador');
let search = ['autos', 'celulares', 'computadoras', 'deportes','electrodomesticos', 'herramientas', 'juguetes', 'muebles', 'vestimenta'];

//console.log(search)

$('#buttonSearch').click(function(value){

    if(inputSearch.value == ""){
        console.log("No hay nada");
    }else{
        //console.log(inputSearch.value);

        for (let i = 0; i < search.length; i++) {
            if(inputSearch.value == search[i]){
                window.location.href = `cart.html #${search[i]}`
                break
            }else{
                //alert('Lo siento, no encontramos lo que buscas')
                //break
            }
            
        }

    }
    
});

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> Daro
// - - - Buscador de Eventos (GeR) - - - 

document.getElementById("inputSearch").addEventListener("keyup", buscador_eventos);

function buscador_eventos(){


    filtro = inputSearch.value.toUpperCase();

    li = box_search.getElementsBytagName("li");

    //busqueda mediante li

    for (i= 0; i < li.length; i ++)

    events = li[i].getElementsBytagName("events")[0]

   textValue= events.textContent || events.innerText;

   if (textValue.toUpperCase().indexOf(filtro) > - 1) {

    li[i].style.display = "" ;
    box_search.style.display="block";

        if (inputSearch.value === ""){
            box_search.style.display="none";
        }


   } else {

    li[i].style.display = "none" ;

   }


}

<<<<<<< HEAD
=======
=======
>>>>>>> 86f46634c3c3bd0da153325def7b7b3abfaae0ea
>>>>>>> Daro


