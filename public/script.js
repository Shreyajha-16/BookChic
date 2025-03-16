document.addEventListener('DOMContentLoaded', () => {
    loadBooks();
    loadJournals();
    loadTBR();
});

// Books Functionality
function addBook() {
    const bookTitle = document.getElementById('bookTitle').value;
    if (bookTitle.trim() === '') return;
    const bookList = document.getElementById('bookList');
    const bookItem = document.createElement('div');
    bookItem.className = 'book-item';
    bookItem.innerText = bookTitle;
    bookList.appendChild(bookItem);
    document.getElementById('bookTitle').value = '';
    saveBooks();
}

function saveBooks() {
    localStorage.setItem('books', document.getElementById('bookList').innerHTML);
}

function loadBooks() {
    document.getElementById('bookList').innerHTML = localStorage.getItem('books') || '';
}

// Journal Functionality
function addJournalEntry() {
    const entry = document.getElementById('journalEntry').value;
    if (entry.trim() === '') return;
    const journalList = document.getElementById('journalList');
    const journalItem = document.createElement('div');
    journalItem.className = 'journal-item';
    journalItem.innerText = entry;
    journalList.appendChild(journalItem);
    document.getElementById('journalEntry').value = '';
    saveJournals();
}

function saveJournals() {
    localStorage.setItem('journals', document.getElementById('journalList').innerHTML);
}

function loadJournals() {
    document.getElementById('journalList').innerHTML = localStorage.getItem('journals') || '';
}

// TBR Functionality
function addTBR() {
    const tbrBook = document.getElementById('tbrBook').value;
    if (tbrBook.trim() === '') return;
    const tbrList = document.getElementById('tbrList');
    const tbrItem = document.createElement('div');
    tbrItem.className = 'tbr-item';
    tbrItem.innerText = tbrBook;
    tbrList.appendChild(tbrItem);
    document.getElementById('tbrBook').value = '';
    saveTBR();
}

function saveTBR() {
    localStorage.setItem('tbr', document.getElementById('tbrList').innerHTML);
}

function loadTBR() {
    document.getElementById('tbrList').innerHTML = localStorage.getItem('tbr') || '';
}
