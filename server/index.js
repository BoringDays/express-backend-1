import express from 'express'
import bodyParser from 'body-parser'
// import multer from 'multer'
import logger from 'morgan'

import routes from './routes/index'

// 已知目前node的机制无法在chrome dev tools里面正常应用sourceMaps，只能调试编译后的代码；新版的node和Chrome有报告说问题已经修复
// 想好好玩async请去web端或者node > 7.6，能用上10月份的node 8就更好了
// https://github.com/nodejs/node/issues/8369

const app = express()
// const upload = multer()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('dev'))

app.use('/api', routes)

app.listen(port, err => {
  if (err) {
    console.log(err)
    return
  }

  console.log(`Listening at http://localhost:${port}\n`)
})
