import express from 'express'
import * as utils from '../../utils'
import Comment from '../../model/comment'

const app = express()
const router = express.Router()

// 按照restful的设计，get = select,post = insert,put = update,delete = delete
router.route('/comment')
  .get((req, res, next) => {
    utils.findList({
      filterConditions: {},
      resultColumns: {name: 1, desc: 1}
    }, res, Comment)
  })
  .post((req, res, next) => {})
  .put((req, res, next) => {})
  .delete((req, res, next) => {})
app.use(router)

export default app
