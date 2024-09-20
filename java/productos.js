
//Boton Menu
const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if (rutaActual == 'imganes/bars-solid.svg') {
        e.target.setAttribute('src', 'imganes/lax.png');
    } else {
        e.target.setAttribute('src', 'imganes/bars-solid.svg');
    }
});


//Productos
function pad(e) {
    e.setAttribute("Style", "padding: 10px; transition:all 0.3s")
}
function apad(e) {
    e.setAttribute("Style", "padding: 0px; transition:all 0.3s")
}

const contraste = new Array('imganes/logo invertido.png')
const original = new Array('imganes/logop-removebg-preview.png')

//Logo
function overpas(e) {
    //recupero el valor de data-i
    let i = e.getAttribute('data-i')
    e.setAttribute('src', contraste[i])

}
function outpas(e) {
    //recupero el valor de data-i
    let i = e.getAttribute('data-i')
    e.setAttribute('src', original[i])
}

//Buscar
const search = () => {
    const searchbox = document.getElementById("buscar-producto").value.toUpperCase();
    const storeitems = document.getElementById("productos")
    const product = document.getElementsByTagName("article")
    const pname = storeitems.getElementsByTagName("p")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('p')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

/**/
const opcion = document.querySelectorAll('.opcion');

// Permite recorrer cada una de nuestras opciones
opcion.forEach(e => {

    // Añadimos un evento a cada elemento seleccionado
    e.addEventListener('click', function(e){

        // Alteranmos las clases de nuestros enlaces
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle('animation');
        padre.parentNode.children[1].classList.toggle('animation');
   
    });


});

//desvanecer
var op=true
desvanecer();

function desvanecer(){

    let img= document.getElementById("imgcab")

    if(op==true){
        img.setAttribute("Style","opacity:1 ; transition: all 1s")
        op=false
    }
    else if(op==false){
        img.setAttribute("Style","opacity:0.1; transition: all 2s")
        op=true
    }
    else{
        img.setAttribute("Style","opacity:1; transition: all 2")
        op=true
    }

    setTimeout("desvanecer()",2000)
}

//desva2

var otrav=true
varss();

function varss(){

    let img= document.getElementById("otravez")
    if(otrav==true){
        img.setAttribute("Style","opacity:0.1; transition: all 1s")
        otrav=false
    }
    else if(otrav==false){
        img.setAttribute("Style","opacity:1; transition: all 2s")
        otrav=true
    }
    else{
        img.setAttribute("Style","opacity:0.1; transition: all 2s")
        otrav=true
    }

    setTimeout("varss()",2000)
}