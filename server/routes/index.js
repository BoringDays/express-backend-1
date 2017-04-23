import express from 'express'
// import Swiper from '../model/swiper'
import Product from '../model/product'
// import User from '../model/user'
import * as utils from '../utils'

const router = express.Router()

router.route('/products')
  .get((req, res, next) => {
    //eslint-disable-next-line
    // debugger
    utils.findList(req, res, Product)
  })
  .post((req, res, next) => {
    // Product.find().exec()
  })
  .put((req, res, next) => {
    // Product.find().exec()
  })
  .delete((req, res, next) => {
    // Product.find().exec()
  })

router.get('/product/:id', (req, res, next) => {

})

export default router
