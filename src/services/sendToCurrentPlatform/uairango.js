/* eslint-disable array-callback-return */
const request = require('request-promise')
const cheerio = require('cheerio')
const Menu = require('../../models/menu')
const Restaurant = require('../../models/restaurant')
const Product = require('../../models/product')
const Row = require('../../models/rows')
const logs = require('../../logs')
const formatTexts = require('./utils/formatTexts')

const uairango = async (restaurants) => {
  for (const { _id, scrappingUrl } of restaurants) {
    const restaurant = await Restaurant.findById(_id)
    logs.info(`Initing scrapping with partner ${restaurant.name}, on uairango.com`)

    if (restaurant.scrapped) return logs.info(`Partner ${restaurant.name} already scrapped`)

    const response = await request(scrappingUrl)
    const $ = cheerio.load(response)

    const rows = []

    $('.panel-default').map((index, sectionFind) => {
      rows.push({
        title: formatTexts($(sectionFind).find('.titulo7').text()),
        products: [],
      })

      $(sectionFind)
        .find('.texto8')
        .map((i, section) => {
          rows[index].products.push({ title: formatTexts(section.children[0].data) })
        })

      $(sectionFind)
        .find('.texto9')
        .map((i, section) => {
          rows[index].products[i] &&
            (rows[index].products[i].description = section.children[0] ? formatTexts(section.children[0].data) : '')
        })

      $(sectionFind)
        .find('.texto11')
        .map((i, section) => {
          rows[index].products[i] &&
            (rows[index].products[i].price = parseFloat(section.children[0].data.trim().replace(',', '.').replace('R$', '')))
        })
    })

    logs.info(`Website already scrapped`)

    const menuFinde =
      (await Menu.findOne({
        restaurant: _id,
      })) ||
      (await Menu.create({
        restaurant: _id,
      }))

    if (menuFinde) {
      restaurant.menu = menuFinde._id

      await restaurant.save()
    }

    logs.info(`Menu already created, creating products`)

    for (const row of rows) {
      const rowAlreadyCreated = menuFinde.rows.some((rowSome) => rowSome === row._id)

      if (!rowAlreadyCreated) {
        const rowFinde = await Row.create({
          title: row.title,
        })

        menuFinde.rows.push(rowFinde._id)

        await menuFinde.save()

        for (const { title, price, description } of row.products) {
          const product = await Product.create({
            title,
            price,
            description,
            restaurant: restaurant._id,
            city: restaurant.city,
          })

          rowFinde.products.push(product.id)

          await rowFinde.save()
        }
      }
    }

    restaurant.scrapped = true
    await restaurant.save()

    logs.info(`Products and rows created successfully`)
  }
}

module.exports = uairango
