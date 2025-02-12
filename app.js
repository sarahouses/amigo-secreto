let listaNombres = [];
let numeroMaximo = 5;

function agregarNombres() {
    let nombreInsertado = document.getElementById("amigo");
    if (nombreInsertado ==="string") {
        alert ("Porfavor, inserte un nombre");
    }
    else {
        listaNombres.push(nombreInsertado);
        document.getElementById("amigo")=" ";
    }
}
