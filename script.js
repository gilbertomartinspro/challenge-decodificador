let informedText = document.getElementById("informedText");
let noMessage = document.querySelector(".no-message");
let result = document.querySelector(".result");
let resultText = document.getElementById("resultText");
let btnEncrypt = document.querySelector("#encrypt");

function encrypt() {

    noMessage.style.display = "none";
    result.style.display = "flex";

    if(informedText.value != "") {
        informedText.value = informedText.value.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    }
    resultText.textContent = informedText.value;
    informedText.value = "";
    
}

btnEncrypt.onclick = encrypt;