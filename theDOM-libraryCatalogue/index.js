// Bookstore object
const bookStore = {
    name: "Flatbooks",

    books: [
        {
            title: "The River Between",
            author: "Ngũgĩ wa Thiong'o",
            image: "https://covers.openlibrary.org/b/isbn/9780435905484-L.jpg"
        },
        {
            title: "Weep Not, Child",
            author: "Ngũgĩ wa Thiong'o",
            image: "https://covers.openlibrary.org/b/isbn/9780435908300-L.jpg"
        },
        {
            title: "A Grain of Wheat",
            author: "Ngũgĩ wa Thiong'o",
            image: "https://covers.openlibrary.org/b/isbn/9780435908478-L.jpg"
        },
        {
            title: "Blossoms of the Savannah",
            author: "Henry Ole Kulet",
            image: "https://covers.openlibrary.org/b/isbn/9789966465443-L.jpg"
        },
        {
            title: "Kidagaa Kimemwozea",
            author: "Ken Walibora",
            image: "https://covers.openlibrary.org/b/isbn/9789966251138-L.jpg"
        },
        {
            title: "Kufa Kuzikana",
            author: "Ken Walibora",
            image: "https://covers.openlibrary.org/b/isbn/9789966251503-L.jpg"
        }
    ]
};

// Select the header
const bookStoreTitle = document.getElementById("header");

// Change the title
bookStoreTitle.textContent = bookStore.name;

// Select the book list
const bookList = document.getElementById("book-list");

// Loop through every book
bookStore.books.forEach((book) => {

    // Create elements
    const bookContainer = document.createElement("li");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookImage = document.createElement("img");

    // Set text and image
    bookTitle.textContent = book.title;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookImage.src = book.image;
    bookImage.alt = book.title;
    bookContainer.append(bookTitle);
    bookContainer.append(bookAuthor);
    bookContainer.append(bookImage);
    bookList.append(bookContainer);
});

const deleteElement = document.getElementById("delete-this");

if (deleteElement) {
    deleteElement.remove();
}