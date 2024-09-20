
//Boton Menu
const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'imganes/bars-solid.svg'){
        e.target.setAttribute('src','imganes/lax.png');
    }else{
        e.target.setAttribute('src','imganes/bars-solid.svg');
    }
});

//CARRUSEL
let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 2s";
            contador=1;
        },1500)
    }
}
//Productos
function pad(e){
    e.setAttribute("Style","padding: 10px; transition:all 1s")
}
function apad(e){
    e.setAttribute("Style","padding: 0px; transition:all 1s")
}

//banner div
function mover(e){
    e.setAttribute("style","  width:750px;  height:350px;transition:all 1s")
}
function salir(e){
    e.setAttribute("style","  width:700px;   height:300px;transition:all 1s")
}
//Colera h1
var sw=0
colorear()
function colorear(){

    let h1 =document.getElementById("titulo")

    if (sw%2==0)
        h1.setAttribute("Style","color: aqua; transition:all 1s")
    else 
        h1.setAttribute("Style","color: black; transition:all 1s")
    
    sw++;

    setTimeout("colorear()",1000)
}