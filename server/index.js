import express from 'express'
import bodyParser from 'body-parser'
// import multer from 'multer'
import logger from 'morgan'

import routes from './routes/index'

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
