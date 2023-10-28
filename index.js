const myLibrary = [];
const newBookBtn = document.getElementById('add-book-btn');
const popUpForm = document.querySelector('.add-book-popup');
const overlay = document.querySelector('.overlay');
const submitBtn = document.querySelector('.submit');
const bookTitle = document.getElementById('book-title');
const author = document.getElementById('author');
const radioBtns = document.querySelectorAll('input[name="has-read"]');
const main = document.querySelector('main');

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

submitBtn.addEventListener('click', () => {
    popUpForm.classList.add('hidden');
    overlay.classList.add('hidden');
})

function Book(title, author, hasRead) {
    this.title = title;
    this.author = author;
    this.hasRead = hasRead;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);

        const newCard = document.createElement('div');
        newCard.classList.add('card');
        main.appendChild(newCard);
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('title-container');
        newCard.appendChild(titleContainer);
        const title = document.createElement('h2');
        title.textContent = newBook.title;
        titleContainer.appendChild(title);
        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = `by ${newBook.author}`;
        titleContainer.appendChild(author);
        const hasRead = document.createElement('p');
        hasRead.classList.add('has-read');
        hasRead.textContent = newBook.hasRead;
        newCard.appendChild(hasRead);
        console.log(newCard);

        return;
}