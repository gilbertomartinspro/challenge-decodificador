let informedText = document.getElementById("informedText");
let noMessage = document.querySelector(".no-message");
let result = document.querySelector(".result");
let resultText = document.getElementById("resultText");
let btnEncrypt = document.querySelector("#encrypt");
let btnDecrypt = document.querySelector("#decrypt");

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