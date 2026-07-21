# Wordly Dictionary SPA

## Project Overview

Wordly Dictionary is a **Single Page Application (SPA)** built using **HTML5, CSS3, and JavaScript**. The application enables users to search for English words and retrieve information such as pronunciation, definitions, part of speech, example usage, synonyms, and source references from a public Dictionary REST API.

The application communicates with the API using the **Fetch API** and displays results dynamically without refreshing the webpage, providing a fast and interactive user experience.

---

# Project Objectives

The objectives of this project are to:

- Build a Single Page Application (SPA).
- Consume data from a public REST API.
- Work with JSON data.
- Practice JavaScript DOM manipulation.
- Use the Fetch API with Promises (`.then()` and `.catch()`).
- Handle errors gracefully.
- Dynamically update webpage content.

---

# Why a Single Page Application (SPA)?

A Single Page Application loads only **one HTML page**. Instead of loading a new webpage whenever the user performs an action, JavaScript updates the existing page dynamically.

This project uses an SPA because:

- The user can search multiple words without refreshing the page.
- Results appear instantly after the API responds.
- Only the required content is updated.
- The application feels faster and more responsive.
- It provides a better user experience than navigating between multiple pages.

---

# Why Not Use Multiple HTML Pages?

A traditional website would load a new HTML page every time the user searched for another word.

Example:

```
Home Page
      ↓
Search
      ↓
Results Page
      ↓
Search Again
      ↓
Another Results Page
```

This approach increases loading time and creates unnecessary page refreshes.

An SPA keeps everything on one page and updates only the dictionary results.

---

# Why Use a REST API?

A REST API provides access to data over the internet using HTTP requests.

Instead of storing thousands of dictionary words inside the project, the application requests only the word entered by the user.

Example request:

```
GET https://api.dictionaryapi.dev/api/v2/entries/en/book
```

The API responds with information about the word in JSON format.

Using a REST API makes the application:

- Lightweight
- Faster to maintain
- Able to search thousands of words
- Always use up-to-date dictionary data

---

# Why Use JSON?

JSON (JavaScript Object Notation) is the format used by the Dictionary API to send data.

Example:

```json
[
  {
    "word": "book",
    "phonetic": "/bʊk/",
    "meanings": [
      {
        "partOfSpeech": "noun"
      }
    ]
  }
]
```

JavaScript converts the JSON response into objects using:

```javascript
response.json()
```

The application then extracts the required information and displays it on the webpage.

---

# Why Not Store Data in a Local JSON File?

A local JSON file would contain only a limited number of words.

For example:

```json
[
    {
        "word":"apple",
        "definition":"A fruit."
    }
]
```

This approach has several disadvantages:

- Only predefined words are available.
- The file becomes very large if thousands of words are added.
- Definitions must be updated manually.
- The application cannot access new or updated words automatically.

Using a REST API avoids these limitations because the data is stored and maintained by the API provider.

---

# Why Use the Fetch API?

The Fetch API allows JavaScript to communicate with web servers using HTTP requests.

This project uses the Promise-based approach:

```javascript
fetch(API_URL + word)
    .then(response => response.json())
    .then(data => {
        // Display results
    })
    .catch(error => {
        console.log(error);
    });
```

Benefits of the Fetch API include:

- Easy communication with REST APIs.
- Supports asynchronous programming.
- Prevents page reloads.
- Returns Promises for better error handling.

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- REST API
- JSON

---

# Project Structure

```
wordly-dictionary/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# Application Workflow

```
User enters a word
        │
        ▼
JavaScript captures the input
        │
        ▼
Fetch API sends HTTP GET request
        │
        ▼
Dictionary REST API
        │
        ▼
JSON response
        │
        ▼
JavaScript converts JSON into objects
        │
        ▼
DOM manipulation
        │
        ▼
Results displayed without page refresh
```

---

# Features

- Search English words
- Display pronunciation
- Display definitions
- Display part of speech
- Display example usage
- Display synonyms
- Display source links
- Save favorite words
- Toggle Light/Dark Mode
- Error handling
- Responsive design

---

# Error Handling

The application checks for:

- Empty search input
- Invalid words
- Network errors
- Failed API requests

User-friendly error messages are displayed whenever an error occurs.

---

# Future Improvements

Future versions could include:

- Save favorites using Local Storage
- Pronunciation audio playback
- Multiple definitions
- Antonyms
- Search history
- Loading spinner
- Better mobile responsiveness

---

# Conclusion

The Wordly Dictionary SPA demonstrates how a modern web application communicates with a public REST API, processes JSON data, and updates the user interface dynamically using JavaScript. By combining HTML, CSS, the Fetch API, and DOM manipulation, the project provides an efficient and interactive way for users to search for dictionary definitions without refreshing the page.

---

# Author

**Joe Mwangi**
