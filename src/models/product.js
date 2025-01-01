const mongoose = require('../database')

const ProductSchema = new mongoose.Schema({
  title: String,
  paused: {
    type: Boolean,
    default: false,
  },
  description: String,
  price: Number,
  city: String,
  restaurant: {
    type: mongoose.Schema.ObjectId,
    ref: 'Restaurant',
  },
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
