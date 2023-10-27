const myLibrary = [];
const newBookBtn = document.getElementById('add-book-btn');
const popUpForm = document.querySelector('.add-book-popup');
const overlay = document.querySelector('.overlay');

newBookBtn.addEventListener('click', () => {
    popUpForm.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

overlay.addEventListener('click', () => {
    popUpForm.classList.add('hidden');
    overlay.classList.add('hidden');
}) 

// add object constructor for book creation
function Book(title, author, hasRead) {
    this.title = title;
    this.author = author;
    this.hasRead = hasRead;
}

// write function to loop through and display each book in the array on the page
function addBookToLibrary(title, author, hasRead) {
    // const newBook = new Book()
}