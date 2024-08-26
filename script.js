document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("input-text");
    const outputText = document.getElementById("output-text");
    const encryptBtn = document.getElementById("encrypt-btn");
    const decryptBtn = document.getElementById("decrypt-btn");
    const copyBtn = document.getElementById("copy-btn");

    // Función para encriptar el texto
    function encryptText(text) {
        const replacements = {
            "e": "enter",
            "i": "imes",
            "a": "ai",
            "o": "ober",
            "u": "ufat"
        };

        return text.replace(/[eioua]/g, function(match) {
            return replacements[match];
        });
    }

    // Función para desencriptar el texto
    function decryptText(text) {
        const replacements = {
            "enter": "e",
            "imes": "i",
            "ai": "a",
            "ober": "o",
            "ufat": "u"
        };

        return text.replace(/enter|imes|ai|ober|ufat/g, function(match) {
            return replacements[match];
        });
    }

    // Eventos de los botones
    encryptBtn.addEventListener("click", function() {
        const text = inputText.value.toLowerCase();
        if (text.match(/^[a-z\s]+$/)) {
            outputText.value = encryptText(text);
        } else {
            outputText.value = "Por favor, ingrese solo letras minúsculas y sin caracteres especiales.";
        }
    });

    decryptBtn.addEventListener("click", function() {
        const text = inputText.value.toLowerCase();
        if (text.match(/^[a-z\s]+$/)) {
            outputText.value = decryptText(text);
        } else {
            outputText.value = "Por favor, ingrese solo letras minúsculas y sin caracteres especiales.";
        }
    });

    copyBtn.addEventListener("click", function() {
        outputText.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
    });
});
