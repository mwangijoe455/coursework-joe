<<<<<<< HEAD
 📚 Bookstore Manager

## Overview

Bookstore Manager is a JavaScript DOM Manipulation project that dynamically displays a collection of books on a web page. The application updates the bookstore title, generates book cards from a JavaScript object, and demonstrates how to create, append, and remove HTML elements using the Document Object Model (DOM).

---

## Features

- Update the bookstore title dynamically.
- Display a list of books.
- Show each book's:
  - Title
  - Author
  - Cover image
- Create HTML elements using JavaScript.
- Append elements to the DOM.
- Remove unwanted elements from the page.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- DOM Manipulation

---

## Project Structure

```
bookstore-manager/
│
├── index.html
├── style.css
├── index.js
├── README.md
└── images/ (optional)
```

---

## How It Works

1. The application loads the `bookStore` object.
2. The page title is updated using JavaScript.
3. Each book is processed using a loop.
4. New HTML elements are created for every book.
5. The elements are appended to the book list.
6. An unnecessary element is removed from the page.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd bookstore-manager
```

If the project uses npm:

```bash
npm install
```

Start the application:

```bash
npm start
```

Alternatively, open `index.html` in your browser or use the Live Server extension in Visual Studio Code.

---

## Learning Objectives

This project demonstrates how to:

- Select DOM elements
- Modify existing elements
- Create new HTML elements
- Append elements to the page
- Remove elements from the DOM
- Loop through JavaScript objects and arrays

---

## Sample Books

- The River Between — Ngũgĩ wa Thiong'o
- Weep Not, Child — Ngũgĩ wa Thiong'o
- A Grain of Wheat — Ngũgĩ wa Thiong'o
- Blossoms of the Savannah — Henry Ole Kulet
- Kidagaa Kimemwozea — Ken Walibora
- Kufa Kuzikana — Ken Walibora

---

## Author

Joe Mwangi
=======
# Influencer-Authenticity-Checker

A front-end web app that checks whether a social media influencer's following and engagement look genuine or inflated. A user enters a profile handle or selects one from a sample dataset and gets a readable authenticity signal, backed by the metrics that produced it.

## Data Layer Contribution

The data layer provides the influencer information and scoring functionality used by the Influencer Authenticity Checker.

### Contributions

- Created and organized the influencer dataset in `src/data/influencers.json`.
- Added influencer profile data including followers, following, engagement metrics, follower growth, posting frequency, and account age.
- Added X/Twitter as an additional supported social media platform.
- Extended the dataset from 50 to 60 influencer profiles, including 10 X/Twitter profiles.
- Implemented scoring utilities in `src/utils/scoring.js` for calculating engagement rate, growth rate, and overall authenticity score.
- Connected the data and scoring functionality to the application interface.

### Files

- `src/App.jsx` — platform selection and application interface.
- `src/data/influencers.json` — influencer profile dataset, including X/Twitter profiles.
- `src/utils/scoring.js` — engagement, growth, and authenticity scoring functions.
- `src/index.css` — application styling.
- `src/main.jsx` — React application entry point.

### Branch

`feature/data-layer`
>>>>>>> 7d9829085c9a73922de35d52b3c8ec16973b35a5
