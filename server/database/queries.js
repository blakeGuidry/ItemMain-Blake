const ItemMain = require('./schema').ItemMain;

const save = (item, cb) => {
  let doc = new ItemMain(item);

  doc.save((err, results) => {
    if (err) {
      console.log('Error in queries saving item');
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}

const find = (id, cb) => {
  ItemMain.find(id, (err, results) => {
    if (err) {
      console.log('Error finding item in queries');
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

module.exports = {
  save,
  find
};