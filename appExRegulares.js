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
        } else if (texto[i].match(/[A-Z]/)) {
            minusculas = false;
            break;
        }
    }
    return minusculas;
}

function encriptar() {
    let texto = document.getElementById("texto").value;

    if (minusculas(texto)){
        document.getElementById("copiar").style.visibility = "visible";
        document.getElementById("noResuelto").style.visibility = "hidden";

        var textoEncriptado = 
            texto.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        
        if (textoEncriptado == texto)
            document.getElementById("textoResultado").textContent = "No se puede encriptar";
        else 
            document.getElementById("textoResultado").textContent = textoEncriptado;
    }else
        document.getElementById("textoResultado").textContent = "No se pueden encriptar mayúsculas";
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    
    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("noResuelto").style.visibility = "hidden";

    if (minusculas(texto)){
        var textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        if (textoDesencriptado == texto)
            document.getElementById("textoResultado").textContent = "No se puede desencriptar";
        else
            document.getElementById("textoResultado").textContent = textoDesencriptado;
    }else
        document.getElementById("textoResultado").textContent = "No se pueden desencriptar mayúsculas";
}

function copiar() {
    const resultado = document.getElementById("textoResultado").textContent;
    navigator.clipboard.writeText(resultado);
}