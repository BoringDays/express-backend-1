// 已知skip方法在数据量大的时候存在性能问题，因项目不大，暂时无视这些问题
// https://cnodejs.org/topic/51508570604b3d512113f1b3

/**
 * 查询列表分页数据
 * @param req {Object} 请求
 * @param res {Object} 返回
 * @param Model {Model} 查询的model
 * @param sort {String} 排序方式
 */
const findList = (req, res, Model, sort = '-_id') => {
  const page = Number(req.params.page)
  const itemsPerPage = Number(req.params.itemsPerPage)
  const start = page * (itemsPerPage - 1)
  const limit = page * itemsPerPage

  //eslint-disable-next-line
  // debugger
  Promise.all([
    Model.find().sort(sort).skip(start).limit(limit).exec(),
    Model.count()
  ])
    .then(result => {
      const total = result[1]
      const totalPage = Math.ceil(total / limit)

      res.json({
        code: 200,
        data: {
          list: result[0],
          total,
          hasNext: totalPage > page ? 1 : 0,
          hasPrev: page > 1 ? 1 : 0
        }
      })
    })
    .catch(err => {
      res.json({
        code: 500,
        errMsg: '' + err
      })
    })
}

/**
 * 查询单条数据
 * @param data {Object} 需要查询的数据
 * @param res {Object} 返回
 * @param Model {Model} 查询的model
 */
const findData = (data, res, Model) => {
  Model.findOne(data).exec()
    .then(result => {
      res.json({
        code: 200,
        data: result
      })
    })
    .catch(err => {
      res.json({
        code: 500,
        errMsg: '' + err
      })
    })
}

/**
 * 插入数据
 * @param data {Object} 需要插入的新数据
 * @param res {Object} 返回
 * @param Model {Model} 需要保存的model
 */
const insertData = (data, res, Model) => {
  Model.insert(data).exec()
    .then(() => {
      res.json({
        code: 200,
        data: 'insert succeed!'
      })
    })
    .catch(err => {
      res.json({
        code: 500,
        errMsg: '' + err
      })
    })
}

/**
 * 更新数据
 * @param data {Object} 需要更新的数据
 * @param res {Object} 返回
 * @param Model {Model} 需要更新的model
 */
const updateData = (data, res, Model) => {
  Model.update({_id: data.id}, data).exec()
    .then(() => {
      res.json({
        code: 200,
        data: 'update succeed!'
      })
    })
    .catch(err => {
      res.json({
        code: 500,
        errMsg: '' + err
      })
    })
}

/**
 * 删除数据
 * @param data {Object} 需要删除的数据
 * @param res {Object} 返回
 * @param Model {Model} 需要执行删除操作的model
 */
const deleteData = (data, res, Model) => {
  Model.remove({_id: data.id}, data).exec()
    .then(() => {
      res.json({
        code: 200,
        data: 'delete succeed!'
      })
    })
    .catch(err => {
      res.json({
        code: 500,
        errMsg: '' + err
      })
    })
}

export {
  findList,
  findData,
  insertData,
  updateData,
  deleteData
}
