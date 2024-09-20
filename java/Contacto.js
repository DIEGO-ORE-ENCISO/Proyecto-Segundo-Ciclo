
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

/*VALIDACION FORMULARIO*/
const nom = document.getElementById("nombre")
const ape = document.getElementById("apellido")
const email = document.getElementById("correo")
const telef = document.getElementById("telefono")
const terminos = document.getElementById("condi")
const form= document.getElementById("formulario")
const parrafo = document.getElementById("warnings")
const mensaje = document.getElementById("mensajes")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let nome = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let txt = /^[a-zA-ZÀ-ÿ\s]{1,1000}$/;
    let exprapellido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let exprcelular = /^\d{9}$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = ""
    if(!nome.test(nom.value)){
        warnings += `⚠  El nombre no es valido <br>`
        entrar = true
    }
    if(!exprapellido.test(ape.value)){
        warnings += `⚠  El apellido no es valido <br>`
        entrar = true
    }
     if(!regexEmail.test(email.value)){
        warnings += `⚠  El email no es valido <br>`
        entrar = true
    }
     if(!exprcelular.test(telef.value)){
        warnings += `⚠  El telefono no es valido <br>`
        entrar = true
    }
     if(terminos.checked==false){
        warnings += `⚠  Debe Aceptar los terminos <br>`
        entrar = true
    }
    if(!txt.test(mensaje.value)){
        warnings += `⚠  Debe ingresar un mensaje <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML ="Se envio el mensaje exitosamente"
    }
})


//colorear
var sw=0
colorear()
function colorear(){

    let a =document.getElementById("contactos")

    if (sw%2==0)
        a.setAttribute("Style","color: aqua; transition:all 1s")
    else 
        a.setAttribute("Style","color: black; transition:all 1s")
    
    sw++;

    setTimeout("colorear()",1000)
}

