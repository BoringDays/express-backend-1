import mongoose from 'mongoose'

// mongoDB似乎无需像sql那样，请求一次数据库要手动打开连接，请求完成后关闭连接，一直打开就是，跟着进程会自动关闭
// 据说mongoDB默认连接数上限是2万（可以修改），sql的话因为连接数限制较小（100），需要手动释放连接避免排队；可以靠增强硬件和修改连接上限改良
// 有说法是千万级以下mySQL，千万级以上mongoDB，亿级hadoop？
mongoose.connect('mongodb://localhost/app_database_1')

// 让mongoose使用原生的promise，需要的话可以改用bluebird之类的库
// 参考：http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise

export default mongoose
