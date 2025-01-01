const mongoose = require('../database')

const RestaurantSchema = new mongoose.Schema({
  name: String,
  email: String,
  scrappingUrl: String,
  city: String,
  scrappingPlatform: {
    type: String,
    default: 'uairango',
  },
  menu: {
    type: mongoose.Schema.ObjectId,
    ref: 'Menu',
  },
  scrapped: {
    type: Boolean,
    default: false,
  },
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)

module.exports = Restaurant
