
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


function redes(e){
    e.setAttribute("Style","transition: 0.5s; object-fit: cover;")
}
function normal(e){
    e.setAttribute("Style","  transform: scale(1.1);transition: all 1s;")
}


//efecto hover
function hoverDentro(x){
    document.getElementsByClassName("pro")[x].style.filter = "blur(1rem)";
    document.getElementsByClassName("pro")[x].style.transition ="all 1s";
    document.getElementsByClassName("parrafo")[x].style.visibility="visible";
    }
        
function hoverFuera(x){
    document.getElementsByClassName("pro")[x].style.filter= "blur(0)";
    document.getElementsByClassName("pro")[x].style.visibility="visibility";
    document.getElementsByClassName("parrafo")[x].style.visibility="hidden";
    }
