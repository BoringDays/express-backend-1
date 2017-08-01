import express from 'express'
import * as utils from '../../utils'
import Forum from '../../model/forum'

const app = express()
const router = express.Router()

// 按照restful的设计，get = select,post = insert,put = update,delete = delete
router.route('/forum')
  .get((req, res, next) => {
    utils.findList({
      filterConditions: {},
      resultColumns: {name: 1, desc: 1}
    }, res, Forum)
  })
  .post((req, res, next) => {
    utils.insertData({
      name: req.params.name,
      desc: req.params.desc,
      topics: []
    }, res, Forum)
  })
  .put((req, res, next) => {
    utils.updateData({
      id: req.params.id,
      name: req.params.name,
      desc: req.params.desc
    }, res, Forum)
  })
  .delete((req, res, next) => {
    utils.deleteData({
      id: req.params.id
    }, res, Forum)
  })
app.use(router)

export default app
