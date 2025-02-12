let listaNombres = [];
let numeroMaximo = 5;
let numeroDeNombres = 0;

function agregarNombres() {
    console.log("se ejecuta agregar Nombres")
    if (numeroDeNombres == numeroMaximo) {
        alert ("Ya llego al número maximo de nombres")
    }
        else {
        let nombreInsertado = document.getElementById("amigo").value;
            if (nombreInsertado ==="") {
            alert ("Porfavor, inserte un nombre");
            }
                else {
                    listaNombres.push(nombreInsertado);
                    document.getElementById("amigo").value="";
                    console.log(listaNombres)
                    listaDeAmigos()
                    numeroDeNombres = numeroDeNombres + 1
    }
  }
    return;
}
function listaDeAmigos() {
    lista=[];
    console.log("se ejecutó listaDeAmigos");
        for (let i = 0; i < listaNombres.length; i++) {
            lista+= `<li>${listaNombres[i]}</li>`;
            actualizarListaAmigos()
    }
    return lista;
  }
  
function actualizarListaAmigos() {
    console.log("Se ejecuto actualizarListaAmigos")
    let listaConAmigos = document.getElementById("listaAmigos");
    listaConAmigos.innerHTML = lista;
  
    let resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = `Has agregado ${listaNombres.length} amigos.`;
    return
}

function sortearAmigo() {
    if (listaNombres == [])
    alert ("No hay nombres, favor de escribirlos");
    else {
        let numeroSorteado = parseInt(Math.floor(Math.random()*listaNombres.length));
        let nombreSorteado = listaNombres[numeroSorteado];
        console.log(nombreSorteado);

        lista = `<li>${nombreSorteado[numeroSorteado]}</li>`
        let listaConAmigos = document.getElementById("listaAmigos");
        listaConAmigos.innerHTML = lista;
        let resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = `¡Felicidades ese es tu nombre sorteado!`;
    }
    }