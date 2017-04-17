import mongoose from '../mongoose'
// import Promise from 'bluebird'

const Schema = mongoose.Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  eMail: String,
  registerDate: Date
})
const User = mongoose.model('User', UserSchema)

// TODO:为何这里需要用bluebird转换？
// Promise.promisifyAll(User)
// Promise.promisifyAll(User.prototype)

export default User
