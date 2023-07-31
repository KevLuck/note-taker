const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

// middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use('/api', require('./routes/notes.js').router);
app.use(express.static('public'));

// GET route
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

// const router = require('./routes/notes.js');
const api = {
  getNotes: (req, res) => {
    res.send([
      { id: 1, title: 'Note 1' },
      { id: 2, title: 'Note 2' },
      { id: 3, title: 'Note 3' },
    ]);
  },
};
