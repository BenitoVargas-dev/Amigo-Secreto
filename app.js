// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nombreDeUsuario = document.getElementById('amigo').value;
    //console.log(nombreDeUsuario);
    if (nombreDeUsuario == '' || !/^[a-zA-Z\s]+$/.test(nombreDeUsuario)) {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreDeUsuario);
        //console.log(amigos);
        document.getElementById('amigo').value = "";
        mostrarAmigos();
    }
    return;
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento);
        //console.log(`Amigo agregado: ${amigos[i]}`);        
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, ingrese un nombre valido');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    //console.log(`Amigo sorteado: ${amigoSorteado}`);
    return;
}
