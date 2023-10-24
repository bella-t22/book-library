const myLibrary = [];
const newBook = document.getElementById('add-book');

newBook.addEventListener('click', () => {
    
})

// add object constructor for book creation
function Book(title, author, hasRead) {
    this.title = title;
    this.author = author;
    this.hasRead = hasRead;
}

// write function to loop through and display each book in the array on the page
function addBookToLibrary(newBook) {
    return myLibrary.push(newBook);
}