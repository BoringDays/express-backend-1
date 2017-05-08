import mongoose from '../mongoose'

const Schema = mongoose.Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  eMail: String,
  registerDate: {
    type: Date,
    default: Date.now
  },
  topics: [{
    type: Schema.Types.ObjectId,
    refs: 'Topic'
  }]
})

export default mongoose.model('User', UserSchema)
