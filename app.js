// Desafío para fortalecer tus habilidades en lógica de programación.
// Desarrollado por María Gabriela Montero

let amigos =[];


function agregarAmigo() {
    let nombreAmigo=document.getElementById('amigo').value.trim();
    console.log(nombreAmigo);
    
    // Validar entrada: 
    // Evitar que la entrada esté vacía:
   if (nombreAmigo===''){
        alert('Por favor, inserte un nombre');
    } 
    // Evitar que se repita el nombre anterior
   if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista');
        return;
    }
    
    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    console.log(amigos);
    actualizarlistaAmigos();
    // Limpiar el campo de entrada
    let valorCaja =document.getElementById('amigo').value='';
    return;
}

function actualizarlistaAmigos(){

    // Obtener el elemento de la lista
    let lista=document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML="";

    // Iterar el arreglo
    for (let amigo of amigos) {
        // Crear un nuevo elemento
        let li=document.createElement("li");
        li.textContent=amigo;

        // Agregar el elemento a la lista
        lista.appendChild(li);
        
    }
}

function sortearAmigo() {

    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos para sortear, debes agregar a tus amigos para jugar');
        return;
    } 


    // Índice aleatorio
    let indice=Math.floor(Math.random()*amigos.length);

    // Obtener el nombre sorteado
    let amigoSecreto=amigos[indice];

    // Obtener el elemento de resultado
    let elementoResultado=document.getElementById('resultado');

    // Resultado del amigo secreto resultante
    elementoResultado.innerHTML=`<li>Tu amigo secreto es:${amigoSecreto} </li>`;
    
}  

function reiniciarJuego() {
    amigos = [];  // Vaciar la lista de amigos
    actualizarlistaAmigos(); // Limpiar la lista en pantalla
    document.getElementById('resultado').innerHTML = ''; // Borrar el resultado
}

actualizarlistaAmigos(amigos)
sortearAmigo(amigos)
