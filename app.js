let listaNombres = [];
let numeroMaximo = 5;

function guardarNombres() {
    let nombreInsertado = document.getElementById("amigo");
    if (nombreInsertado =="") {
        alert ("Porfavor, inserte un nombre");
    }
    else {
        listaNombres.push(nombreInsertado);
        document.getElementById("amigo")=" ";
    }
}
