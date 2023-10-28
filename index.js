const myLibrary = [];
const newBookBtn = document.getElementById('add-book-btn');
const popUpForm = document.querySelector('.add-book-popup');
const overlay = document.querySelector('.overlay');
// const submitBtn = document.querySelector('.submit');
const bookTitle = document.getElementById('book-title');
const author = document.getElementById('author');
const radioBtns = document.querySelectorAll('input[name="has-read"]');

let checkedRadioBtn;
function checkedRadio(radioBtns) {
    for (radio of radioBtns) {
        if (radio.checked) {
            return checkedRadioBtn = radio;
        }
    }
}

newBookBtn.addEventListener('click', () => {
    popUpForm.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

overlay.addEventListener('click', () => {
    popUpForm.classList.add('hidden');
    overlay.classList.add('hidden');
})

popUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkedRadio(radioBtns);
    const newBook = new Book(bookTitle.value, author.value, checkedRadioBtn.value);
    addBookToLibrary(newBook);
})

function Book(title, author, hasRead) {
    this.title = title;
    this.author = author;
    this.hasRead = hasRead;
}

function addBookToLibrary(newBook) {
    console.log(newBook);
    myLibrary.push(newBook);
    console.log(myLibrary);
}