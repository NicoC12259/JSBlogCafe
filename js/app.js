/*console.log("hola mundo")

let nombre = "Nodo Tecnologico";

let edad = 18 

console.log("Hola soy " + nombre + "y tengo" + edad + "años")

// Definicion de una función 
function suma(numero1 , numero2){
    return numero1 + numero2
}

//Llamado a la función

let resultado = suma("5","8")

console.log(resultado) */

const persona = {
   nombre: "Nodo Tecnologico",
   edad: 5,
   anioDeNacimiento: 2020
   
}

console.log(" hola soy el " + persona.edad)


const textoHeader = document.querySelector('#heading')

console.log(textoHeader)

textoHeader.textContent = "Nuevo Texto"

textoHeader.classList.add('nueva-clase')

const enlaces= document.querySelectorAll('.navegacion a')

console.log(enlaces[2])

enlaces[2].textContent= "Nuevo enlace"

const nuevoEnlase=document.createElement('A')
nuevoEnlase.textContent="Ver más"
nuevoEnlase.href="https://paletadecolores.com.ar/"
nuevoEnlase.classList.add("nueva-clase")

const navegacion = document.querySelector('.navegacion')

navegacion.appendChild(nuevoEnlase)

const nuevoParrafo = document.createElement('P')
nuevoParrafo.textContent="En esta pagina web podras aprender como hacer y cuales son todos los cafes,"
nuevoParrafo.classList.add("nueva-clase")
const header__texto = document.querySelector('.header__texto')
header__texto.appendChild(nuevoParrafo)

const btnForm= document.querySelector('.formulario input[type=submit]')
console.log(btnForm)

/*btnForm.addEventListener('click', function(){

})*/

btnForm.addEventListener('click', imprimirClick)
function imprimirClick(e){
    e.preventDefault()
    console.log("Click")
}
const Contacto= document.querySelector("h3")
console.log(Contacto)
Contacto.addEventListener('click', nuevaClase)

function nuevaClase(){
    Contacto.classList.toggle("nueva-clase")
    Contacto.textContent=("Formulario")
}

