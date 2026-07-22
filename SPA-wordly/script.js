
// Dictionary API URL
const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// HTML Elements
const searchForm = document.getElementById("searchForm");
const wordInput = document.getElementById("wordInput");
const result = document.getElementById("result");
const errorMessage = document.getElementById("errorMessage");
const savedWords = document.getElementById("savedWords");
const themeBtn = document.getElementById("themeBtn");

// Store favourite words
let favourites = [];

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    searchWord();
});

function searchWord() {
    const word = wordInput.value.trim();
    result.innerHTML = "";
    errorMessage.textContent = "";

    if (word === "") {
        errorMessage.textContent = "Please enter a word.";
        return;
    }

    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch(API_URL + word, requestOptions)

        .then(function (response) {

            if (!response.ok) {
                throw new Error("Word not found.");
            }
            return response.json();

        })

        .then(function (data) {

            displayWord(data[0]);

        })

        .catch(function (error) {

            errorMessage.textContent = error.message;

        });

}


function displayWord(word) {

    const meaning = word.meanings[0];

    const definition = meaning.definitions[0];

    let pronunciation = word.phonetic || "Not Available";

    let example = definition.example || "No example available.";

    let synonyms = "None";

    if (definition.synonyms && definition.synonyms.length > 0) {

        synonyms = definition.synonyms.join(", ");

    }

    result.innerHTML = `

    <div class="card">

        <h2>${word.word}</h2>

        <p>

            <strong>Pronunciation:</strong>

            ${pronunciation}

        </p>

        <p>

            <strong>Part of Speech:</strong>

            ${meaning.partOfSpeech}

        </p>

        <p>

            <strong>Definition:</strong>

            ${definition.definition}

        </p>

        <p>

            <strong>Example:</strong>

            ${example}

        </p>

        <p>

            <strong>Synonyms:</strong>

            ${synonyms}

        </p>

        <p>

            <strong>Source:</strong>

            <a href="${word.sourceUrls[0]}" target="_blank">

                Dictionary Source

            </a>

        </p>

        <button id="saveWordBtn">

             Save Word

        </button>

    </div>

    `;

    // Add save event

    document

        .getElementById("saveWordBtn")

        .addEventListener("click", function () {

            saveWord(word.word);

        });

}


function saveWord(word) {

    if (favourites.includes(word)) {

        alert("Word already saved.");

        return;

    }

    favourites.push(word);

    const listItem = document.createElement("li");

    listItem.textContent = word;

    savedWords.appendChild(listItem);

}

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

});


wordInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        searchWord();

    }

});


wordInput.addEventListener("input", function () {

    errorMessage.textContent = "";

});