// Esto es la manera más facil, pero a mi no me gusta lo facil :)

function encriptar() {

    resultado = "";
    var texto = document.getElementById("texto").value.toLowerCase();
    var textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("noResuelto").style.visibility = "hidden";


    document.getElementById("textoResultado").textContent = textoEncriptado;

    if (textoEncriptado == texto)
        document.getElementById("textoResultado").textContent = "No se puede encriptar";

    //document.getElementById("textoResultado").textContent = resultado;     
}

function desencriptar() {

    resultado = "";
    var texto = document.getElementById("texto").value.toLowerCase();
    var textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("noResuelto").style.visibility = "hidden";

    document.getElementById("textoResultado").textContent = textoDesencriptado;

    if (textoDesencriptado == texto)
        document.getElementById("textoResultado").textContent = "No se puede desencriptar";

    //document.getElementById("textoResultado").textContent = resultado;

}

function copiar() {
    const resultado = document.getElementById("textoResultado").textContent;
    navigator.clipboard.writeText(resultado);
}











//---------------------------------------------------------------------------------

/*const diccionarioEncriptar = {
"a": "ai",
"e": "enter",
"i": "imes",
"o": "ober",
"u": "ufat"
};

const diccionarioDesencriptar = {
"ai": "a",
"enter": "e",
"imes": "i",
"ober": "o",
"ufat": "u"
};

function encriptar() {
  const texto = document.getElementById("texto").value;
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i];
    resultado += diccionarioEncriptar[letra] || letra;
  }
  document.getElementById("textoResultado").textContent = resultado;
}

function desencriptar() {
    const texto = document.getElementById("texto").value;
    let resultado = "";
    let llave = "";
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (diccionarioDesencriptar[llave + caracter]) {
            resultado += diccionarioDesencriptar[llave + caracter];
            llave = "";
        } else {
            llave += caracter;
            if (i === texto.length - 1) {
                resultado += llave;
            }
        }
    }
    document.getElementById("textoResultado").textContent = resultado;
}

function copiar() {
  const resultado = document.getElementById("textoResultado").textContent;
  navigator.clipboard.writeText(resultado);
}*/
