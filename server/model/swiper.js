import mongoose from '../mongoose'
// import Promise from 'bluebird'

const Schema = mongoose.Schema
const SwiperSchema = new Schema({
  index: {
    src: String,
    desc: String
  }
})
const Swiper = mongoose.model('Swiper', SwiperSchema)

// TODO:为何这里需要用bluebird转换？
// Promise.promisifyAll(User)
// Promise.promisifyAll(User.prototype)

export default Swiper
