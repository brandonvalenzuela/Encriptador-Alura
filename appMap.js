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

function validar(event) {
    var caracter = String.fromCharCode(event.keyCode);
    var permitidos = /[a-z\s]/;
    if (!permitidos.test(caracter)) {
        event.preventDefault();
        return false;
    }
}

function minusculas(texto) {
    var minusculas = true;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].match(/[a-z]/) && texto[i] != " " && texto[i] == texto[i].toUpperCase()) {
            minusculas = false;
        }else if (texto[i].match(/[A-Z]/)){
            minusculas = false;
            break;
        }
    }
    return minusculas;
}

function encriptar() {
    const texto = document.getElementById("texto").value;
    
    if (minusculas(texto)){
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
    }else
        document.getElementById("textoResultado").textContent = "No se pueden encriptar mayúsculas";
}

function desencriptar() {
    const texto = document.getElementById("texto").value;
    
    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("noResuelto").style.visibility = "hidden";
    
    if (minusculas(texto)){
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
            if (texto == resultado)
                document.getElementById("textoResultado").textContent = "No se puede desencriptar";
            else
                document.getElementById("textoResultado").textContent = resultado;
        }      
    }else
        document.getElementById("textoResultado").textContent = "No se pueden desencriptar mayúsculas";
}
function copiar() {
    const resultado = document.getElementById("textoResultado").textContent;
    navigator.clipboard.writeText(resultado);
}