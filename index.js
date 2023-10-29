const myLibrary = [
    {
        title: 'Daisy Jones & The Six',
        author: 'Taylor Jenkins Reid',
        hasRead: 'Read'
    },
    {
        title: 'The Book Thief',
        author: 'Markus Zusak',
        hasRead: 'Read'
    }
];
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

function createCard(newBook) {
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
    const changeRead = document.createElement('div');
    changeRead.classList.add('change-read');
    newCard.appendChild(changeRead);
    const hasRead = document.createElement('p');
    hasRead.classList.add('has-read');
    hasRead.textContent = newBook.hasRead;
    changeRead.appendChild(hasRead);
    const icon = document.createElement('img');
    icon.src = 'icons/edit_FILL0_wght400_GRAD0_opsz24.svg';
    changeRead.appendChild(icon);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'Delete';
    newCard.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        deleteBook(title.textContent, newCard);
    })

    icon.addEventListener('click', () => {
        if (hasRead.textContent == 'Read') {
            return hasRead.textContent = 'Not Read';
        } else if (hasRead.textContent == 'Not Read') {
            return hasRead.textContent = 'Read';
        }
    })
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    createCard(newBook);
}

function deleteBook(name, card) {
    myLibrary.forEach((book) => {
        if (book.title == name) {
            const firstIndex = myLibrary.indexOf(book);
            myLibrary.splice(firstIndex, 1);
            
            while (card.hasChildNodes()) {
                card.removeChild(card.firstChild);
            }
            card.remove();  
            return;
        }
    })
}

myLibrary.forEach((newBook) => {
    createCard(newBook);
})