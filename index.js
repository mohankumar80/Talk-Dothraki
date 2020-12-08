var textInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-text");

var serverUrl = "https://api.funtranslations.com/translate/dothraki.json";

function getFullUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error occured", error);
    alert("An error occured, Please try after sometime. Thank you!!");
}

function clickEventHandler() {
    var inputText = textInput.value;
    fetch(getFullUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var TranslatedText = json.contents.translated;
        outputDiv.innerText = TranslatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);