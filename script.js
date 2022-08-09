let local = document.getElementById("texto");
escreverTexto(local);


function escreverTexto(texto){
    const array = texto.innerHTML.split("");
    texto.innerHTML = "";
    array.forEach((letra, i) => {
        setTimeout(function(){
            texto.innerHTML += letra;
        }, 500 * i);
    });
}