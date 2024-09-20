
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





for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}


/*VALIDACION FORMULARIO*/
const nom = document.getElementById("nombre")
const nompro = document.getElementById("inputNombre")
const ape = document.getElementById("apellido")
const email = document.getElementById("correo")
const telef = document.getElementById("telefono")
const terminos = document.getElementById("condi")
const form= document.getElementById("formulario")
const parrafo = document.getElementById("warnings")
const provi = document.getElementById("distrito")
const dire = document.getElementById("direccion")
const aparta = document.getElementById("apartamento")
const targeta = document.getElementById("inputNumero")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let nome = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let nomepro = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let exprapellido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let exprcelular = /^\d{9}$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let exprprovincia = /^[a-zA-ZÀ-ÿ\s]{1,1000}$/;
    let exprdirec = /^[a-zA-ZÀ-ÿ\s]{1,1000}$/;
    let expraparta=/^[A-Za-z0-9\s]+$/g;
    let exptargeta=/^\d{16}$/;

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
    if(!exprprovincia.test(provi.value)){
        warnings += `⚠  Debe llenar el campo  distrito <br>`
        entrar = true
    }
    if(!exprdirec.test(dire.value)){
        warnings += `⚠  Debe llenar el campo direccion <br>`
        entrar = true
    }
    if(!expraparta.test(aparta.value)){
        warnings += `⚠  Debe llenar el campo apartamento <br>`
        entrar = true
    }
    if(!exptargeta.test(targeta.value)){
        warnings += `⚠  Verifique los datos ingresados de la targeta <br>`
        entrar = true
    }
    if(!nomepro.test(nompro.value)){
        warnings += ``
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML ="Su compra se efectuo exitosamente"
    }
})


