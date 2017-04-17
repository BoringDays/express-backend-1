import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/app_database_1')

// 让mongoose使用原生的promise
// 参考：http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise

export default mongoose
