const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Save Books
app.post('/saveBook', (req, res) => {
    const book = req.body.book;
    if (book) {
        let books = JSON.parse(fs.readFileSync('data/books.json', 'utf-8') || '[]');
        books.push(book);
        fs.writeFileSync('data/books.json', JSON.stringify(books));
        res.send({ message: 'Book saved successfully!' });
    } else {
        res.status(400).send({ message: 'Invalid Book Data' });
    }
});

// Save Journal Entries
app.post('/saveJournal', (req, res) => {
    const journal = req.body.journal;
    if (journal) {
        let journals = JSON.parse(fs.readFileSync('data/journals.json', 'utf-8') || '[]');
        journals.push(journal);
        fs.writeFileSync('data/journals.json', JSON.stringify(journals));
        res.send({ message: 'Journal saved successfully!' });
    } else {
        res.status(400).send({ message: 'Invalid Journal Data' });
    }
});

// Save TBR Items
app.post('/saveTBR', (req, res) => {
    const tbr = req.body.tbr;
    if (tbr) {
        let tbrList = JSON.parse(fs.readFileSync('data/tbr.json', 'utf-8') || '[]');
        tbrList.push(tbr);
        fs.writeFileSync('data/tbr.json', JSON.stringify(tbrList));
        res.send({ message: 'TBR Item saved successfully!' });
    } else {
        res.status(400).send({ message: 'Invalid TBR Data' });
    }
});

// Fetch all saved data
app.get('/getAllData', (req, res) => {
    const books = JSON.parse(fs.readFileSync('data/books.json', 'utf-8') || '[]');
    const journals = JSON.parse(fs.readFileSync('data/journals.json', 'utf-8') || '[]');
    const tbr = JSON.parse(fs.readFileSync('data/tbr.json', 'utf-8') || '[]');
    res.send({ books, journals, tbr });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
