const mensaje=document.getElementById("mensaje");
//console.log(mensaje);


const boton1=document.getElementById("boton1");
const boton2=document.getElementById("boton2");
const boton3=document.getElementById("boton3");



boton1.addEventListener("click", mostrarfondo1);

function mostrarfondo1(){
    console.log("click");
    mensaje.classList.add("bg-dark","text-light");
    mensaje.classList.remove("bg-secondary");
    mensaje.classList.remove("bg-warning");
}


boton2.addEventListener("click",mostrarfondo2);

function mostrarfondo2(){
    console.log("click");
    mensaje.classList.add("bg-secondary","text-warning");
    mensaje.classList.remove("bg-dark");
    mensaje.classList.remove("bg-warning");
    mensaje.classList.remove("bg-marging");
}


boton3.addEventListener("click",mostrarfondo3);

function mostrarfondo3(){
    console.log("click");
    mensaje.classList.add("bg-warning","text-danger");
    mensaje.classList.remove("bg-secondary");
    mensaje.classList.remove("text-light");
    mensaje.classList.remove("bg-dark");
}