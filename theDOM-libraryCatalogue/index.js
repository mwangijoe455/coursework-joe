// Update header
const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = bookStore.name;

// Select the list
const bookList = document.getElementById("book-list");

// Loop through books
bookStore.books.forEach((book) =>{

    // Create elements
    const bookContainer = document.createElement("li");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookImage = document.createElement("img");

    // Add content
    bookTitle.textContent = book.title;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookImage.src = book.image;
    bookImage.alt = book.title;

    // Append to container
    bookContainer.append(bookTitle);
    bookContainer.append(bookAuthor);
    bookContainer.append(bookImage);

    // Append to page
    bookList.append(bookContainer);
});

// Bonus challenge
const deleteElement = document.getElementById("delete-this");

if (deleteElement) {
    deleteElement.remove();
}