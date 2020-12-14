var topic;
var apiKey;
var url;

function updateURL() {
    topic = document.getElementById("inputTekst").value;
    apiKey = "49908478ebb84b4bb03b83576c0218ce";
    url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;
}

function convertToJason(response) {
    return response.json();
}

function processData(data) {
    document.getElementById("newsContainer").innerHTML = "";
    for (i = 0; i <= 11; i++) {
        document.getElementById("newsContainer").innerHTML += `<a href="${data.articles[i].url}"><div class="newsBlock">${data.articles[i].title}</div></a><br>`;
    }
}

function fetchArticles() {
    updateURL();
    fetch(url)
        .then(convertToJason)
        .then(processData);
}


