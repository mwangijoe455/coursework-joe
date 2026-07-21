
let catalog = {
    storeName: "Flatbooks",
    tagline: "Stories that stay with you.",
    books: [
        { title: "The Midnight Library", author: "Matt Haig", genre: "Fiction", price: 16.99, inStock: true },
        { title: "Atomic Habits", author: "James Clear", genre: "Self-Help", price: 14.99, inStock: true },
        { title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", price: 18.99, inStock: true },
        { title: "The Silent Patient", author: "Alex Michaelides", genre: "Thriller", price: 15.99, inStock: false },
        { title: "Becoming", author: "Michelle Obama", genre: "Memoir", price: 22.99, inStock: true },
        { title: "Project Hail Mary", author: "Andy Weir", genre: "Sci-Fi", price: 19.99, inStock: true },
        { title: "The Song of Achilles", author: "Madeline Miller", genre: "Fiction", price: 17.99, inStock: false },
        { title: "Think Like a Monk", author: "Jay Shetty", genre: "Self-Help", price: 13.99, inStock: true },
    ],
};


// UPDATE STORE NAME

let storeName = document.getElementById('storeName');
storeName.textContent = catalog.storeName;

let tagline = document.getElementById('storeTagline');
tagline.textContent = catalog.tagline;


let bookContainer = document.getElementById('bookContainer');

// LOOP THROUGH BOOKS AND CREATE ELEMENTS

for (let i = 0; i < catalog.books.length; i++) {
    let book = catalog.books[i];
    
    // Create book card
    let card = document.createElement('div');
    
    // Add title
    let titleEl = document.createElement('h2');
    titleEl.textContent = book.title;
    card.appendChild(titleEl);
    
    // Add author
    let authorEl = document.createElement('p');
    authorEl.textContent = 'Author: ' + book.author;
    card.appendChild(authorEl);
    
    // Add genre
    let genreEl = document.createElement('p');
    genreEl.textContent = 'Genre: ' + book.genre;
    card.appendChild(genreEl);
    
    // Add price
    let priceEl = document.createElement('p');
    priceEl.textContent = 'Price: $' + book.price.toFixed(2);
    card.appendChild(priceEl);
    
    // Add stock status
    let stockEl = document.createElement('p');
    stockEl.textContent = book.inStock ? 'In Stock: Yes' : 'In Stock: No';
    card.appendChild(stockEl);
    
    // Add divider
    let divider = document.createElement('hr');
    card.appendChild(divider);
    
    // Add card to container
    bookContainer.appendChild(card);
}

console.log("Flatbooks Bookstore");
console.log(`${catalog.storeName}`);
console.log(`${catalog.tagline}`);
console.log(`Total Books: ${catalog.books.length}`);