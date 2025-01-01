const mongoose = require('../database')

const MenuSchema = new mongoose.Schema({
  rows: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Row',
    },
  ],
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: 'Restaurant',
  },
  additional: [
    {
      title: String,
      price: Number,
    },
  ],
})

const Menu = mongoose.model('Menu', MenuSchema)

module.exports = Menu
