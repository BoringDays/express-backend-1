import mongoose from '../mongoose'

// 这里设计可以考虑mongoDB权威指南，范式化和反范式化一节，以及以下链接；sub document和 nest model都支持
// 现在如此设计要考虑populate的问题了
// http://stackoverflow.com/questions/42290217/mongoose-nested-schema-vs-nested-models

const Schema = mongoose.Schema
const ForumSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: String,
  topics: [{
    type: Schema.Types.ObjectId,
    refs: 'Topic'
  }]
})

export default mongoose.model('Forum', ForumSchema)
