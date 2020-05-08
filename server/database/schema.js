const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/targaryen')
  .then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  });

let ItemMainSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

const ItemMain = mongoose.model('ItemMain', ItemMainSchema);

module.exports = { ItemMain };
