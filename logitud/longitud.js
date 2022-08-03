console.log ("desde js");

//selecciono elementos vinculados al html
const boton = document.getElementById("boton");




const milimetro= document.getElementById("milimetro")
const centimetro= document.getElementById("centimetro")
const decimetro=document.getElementById("decimetro")
const decametro= document.getElementById("decametro")
const hectometro= document.getElementById("hectometro")
const kilometro= document.getElementById("kilometro")

//evento click

boton.addEventListener("click",metros);

//crea funcion

function metros (){
let metros = document.getElementById("metros").value;
metros = parseInt (metros);

//instrucciones

milimetro.textContent=metros*100
centimetro.textContent=metros*100
decimetro.textContent=metros*10
decametro.textContent=metros/10
hectometro.textContent=metros/100
kilometro.textContent=metros/1000

}