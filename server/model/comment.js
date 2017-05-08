import mongoose from '../mongoose'

const Schema = mongoose.Schema
const CommentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  submitDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    refs: 'User',
    required: true
  }
})

export default mongoose.model('Comment', CommentSchema)
