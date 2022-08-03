console.log  ("desde js");

//seleccionar elemento

const boton = document.getElementById("boton");


const resultado = document.getElementById("resultado");

let suma;
let promediofinal;

//evento click

boton.addEventListener("click",prome);

//crear funcion prome

function prome() {

    let nota1 = document.getElementById("nota1").value;
    nota1= parseInt(nota1);


let nota2 = document.getElementById("nota2").value;
    nota2= parseInt(nota2);

    let nota3 = document.getElementById("nota3").value;
    nota3= parseInt(nota3);


    let nota4 = document.getElementById("nota4").value;
    nota4= parseInt(nota4);


    //intrucciones

    console.log(nota1,nota2,nota3,nota4);

    suma=nota1+nota2+nota3+nota4;

    promediofinal=suma/4;


    if (promediofinal>=7){
        resultado.classList.remove ("bg-danger");
        resultado.classList.add("bg-success");
    }

    else {
        resultado.classList.remove("bg-success");
        resultado.classList.add("bg-danger")
    }


    resultado.classList.add("text-light");
    resultado.textContent= `El resultado es ${promediofinal}  `;



}