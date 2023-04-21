const diccionarioEncriptar = {
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
    const texto = document.getElementById("texto").value.toLowerCase();
    let resultado = "";

    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("noResuelto").style.visibility = "hidden";

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        resultado += diccionarioEncriptar[letra] || letra;
    }


    if (texto == resultado)
        document.getElementById("textoResultado").textContent = "No se puede encriptar";
    else
        document.getElementById("textoResultado").textContent = resultado;

}

function desencriptar() {

    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("noResuelto").style.visibility = "hidden";

    const texto = document.getElementById("texto").value.toLowerCase();

    let resultado = "";
    var llave = "";
    let i = 0;
    for (i; i < texto.length; i++) {
        for (let j = i; j < texto.length; j++) {
            const caracter = texto[j];
            if (diccionarioDesencriptar[llave + caracter]) {
                resultado += diccionarioDesencriptar[llave + caracter];
                llave = "";
                i = j;
                break;
            } else {
                llave += caracter;

                if (j === texto.length - 1) {
                    resultado += texto[i];
                    llave = "";
                }
            }
        }
    }

    if (texto == resultado)
        document.getElementById("textoResultado").textContent = "No se puede desencriptar";
    else
        document.getElementById("textoResultado").textContent = resultado;

}

function copiar() {
    const resultado = document.getElementById("textoResultado").textContent;
    navigator.clipboard.writeText(resultado);
}