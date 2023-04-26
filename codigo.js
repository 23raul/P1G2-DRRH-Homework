
//Dar un numero valor al INPUT "resultado" en la pag HTML
function darValor(valor){
    document.getElementById("resultado").value = valor
    //alert(nro)
}

//obtener el valor actual del INPUT "resultado" en la pag HTML
function obtenerValor(){
    var nro = document.getElementById("resultado").value
    return nro
    //alert(nro)
}

//Adjuntar un nuevo valor a la derecha
//del INPUT "resultado" en la pag HTML
function adjuntarValor(numero){
    var actualNumero = obtenerValor()
    darValor(actualNumero + numero)
}

function Borrartodo(){
    var vacio = ""
    darValor(vacio)
}

function factorial() {
    var numero = obtenerValor()
    var i = 1 
    var resultado = 1
    while (i <= numero) {
        resultado = resultado * i
         i = i + 1 
    }
    darValor(resultado)
}
