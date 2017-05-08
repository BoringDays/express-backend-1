import 'forum'
import 'topic'
import 'comment'
import 'user'

// import express from 'express'
// import Swiper from '../model/swiper'
// import Product from '../model/product'
// import User from '../model/user'
// import * as utils from '../utils'

// const router = express.Router()
//
// router.route('/products')
//   .get((req, res, next) => {
//     //eslint-disable-next-line
//     // debugger
//     utils.findList(req, res, Product)
//   })
//   .post((req, res, next) => {
//     utils.updateData({
//       name: req.params.name,
//       desc: req.params.desc,
//       descImg: req.params.descImg ? req.params.descImg : 'http://placeholder.qiniudn.com/640x300',
//       content: req.params.content ? req.params.content : ''
//     }, res, Product)
//   })
//   .put((req, res, next) => {
//     let random = Math.random()
//     let type
//
//     if (random < 1 / 3) {
//       type = 1
//     } else if (random >= 1 / 3 || random <= 2 / 3) {
//       type = 2
//     } else {
//       type = 3
//     }
//
//     utils.insertData({
//       name: req.params.name,
//       desc: req.params.desc,
//       descImg: req.params.descImg ? req.params.descImg : 'http://placeholder.qiniudn.com/640x300',
//       content: req.params.content ? req.params.content : '',
//       isHot: Math.random() > 0.5, // 用随机数模拟热门项目
//       type: type
//     }, res, Product)
//   })
//   .delete((req, res, next) => {
//     // Product.find().exec()
//     utils.deleteData({
//       id: req.params.id
//     }, res, Product)
//   })
//
// router.get('/product/:id', (req, res, next) => {
//
// })

// export default router
