import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'
import logger from 'morgan'

import routes from './server/routes'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends: true}))
app.use(multer())
app.use(logger('dev'))

app.use('/api', routes)

app.listen(port, err => {
  if (err) {
    console.log(err)
    return
  }

  console.log(`Listening at http://localhost:${port}\n`)
})
