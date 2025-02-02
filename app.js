let amigos = [];

function agregarAmigo(){
    if (document.getElementById("amigo").value.trim() === ""){
        alert("Por favor, inserte un nombre.")
    }else{
        amigos.push(document.getElementById("amigo").value.trim());
        document.getElementById("amigo").value = "";
        actualizarListaAmigos();
    }
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length ==0){
        alert("No se puede sortear una lista vacias")
    }else{
        document.getElementById("resultado").innerText = "El ganador es: " + amigos[Math.floor(Math.random()*amigos.length)];
    }

}
