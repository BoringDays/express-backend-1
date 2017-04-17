import mongoose from '../mongoose'
// import Promise from 'bluebird'

const Schema = mongoose.Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: String,
  descImg: String,
  content: String,
  isHot: Boolean,
  type: Number
})
const Product = mongoose.model('Product', ProductSchema)

// TODO:为何这里需要用bluebird转换？
// Promise.promisifyAll(Product)
// Promise.promisifyAll(Product.prototype)

export default Product
