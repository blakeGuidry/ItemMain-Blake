const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 8008;
const db = require('./database/queries');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());
app.use(express.json());

app.get('/:id', (req, res) => {
  db.find(req.params, (err, about) => {
    if (err) {
      res.status(500).send('Error retrieving items details');
    } else {
      res.send(about);
    }
  })
})
  
app.post('/item', (req, res) => {
  db.save(req.body, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  })
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})