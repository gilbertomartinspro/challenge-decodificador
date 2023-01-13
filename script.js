const informedText = document.querySelector("#informedText");
const noMessage = document.querySelector(".no-message");
const result = document.querySelector(".result");
const resultText = document.getElementById("resultText");
const btnEncrypt = document.querySelector("#encrypt");
const btnDecrypt = document.querySelector("#decrypt");
const btnCopy = document.querySelector("#copy");

informedText.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
        e.preventDefault();
        alert("Digite apenas letras minúsculas e sem acento.");
    }
});

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-z0-9]';
    
    if(char.match(pattern) || e.keyCode == 32 || e.keyCode == 13) {
        return true;
    }
}

function viewResult() {
    noMessage.style.display = "none";
    result.style.display = "flex";
}

function reset() {
    noMessage.style.display = "flex";
    result.style.display = "none";
    informedText.focus();
}

function encrypt() {

    viewResult();

    if(informedText.value != "") {
        informedText.value = informedText.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        resultText.textContent = informedText.value;
        informedText.value = "";
        informedText.focus();
    } 
    else {
        alert("Informe um texto para ser criptografado.");
        reset();
    }
    
}

btnEncrypt.onclick = encrypt;

function decrypt() {

    viewResult();

    if(informedText.value != "") {
        informedText.value = informedText.value.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        resultText.textContent = informedText.value;
        informedText.value = "";
        informedText.focus();
    } 
    else {
        alert("Informe um texto para ser descriptografado.");
        reset();
    }
    
}

btnDecrypt.onclick = decrypt;

function copy() {
    navigator.clipboard.writeText(resultText.value);
    alert("Texto copiado para área de transferência.");
    reset();
}

btnCopy.onclick = copy;