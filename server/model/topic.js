import mongoose from '../mongoose'

const Schema = mongoose.Schema
const TopicSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  submitDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    refs: 'Comment'
  }]
})

export default mongoose.model('Topic', TopicSchema)
