import express from 'express'
import * as utils from '../utils'
import Forum from '../model/forum'

const router = express.Router()

// 按照restful的设计，get = select,post = insert,put = update,delete = delete
router.route('/forum')
  .get((req, res, next) => {
    utils.findList({
      filterConditions: {},
      resultColumns: {name: 1, desc: 1}
    }, res, Forum)
  })
  .post((req, res, next) => {})
  .put((req, res, next) => {})
  .delete((req, res, next) => {})
