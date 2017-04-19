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
  ]).then(result => {
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
  }).catch(err => {
    res.json({
      code: 500,
      errMsg: '' + err
    })
  })
}

/**
 * 查询单条数据
 * @param req {Object} 请求
 * @param res {Object} 返回
 * @param Model {Model} 查询的model
 */
const findData = (req, res, Model) => {
  Model.findOne(req.params).exec()
    .then(result => {
      res.json({
        code: 200,
        data: result
      })
    }).catch(err => {
      res.json({
        code: 500,
        errMsg: '' + err
      })
    })
}

/**
 * 保存数据
 * @param req {Object} 请求
 * @param res {Object} 返回
 * @param Model {Model} 需要保存的model
 */
const saveData = (req, res, Model) => {
}

/**
 * 更新数据
 * @param req {Object} 请求
 * @param res {Object} 返回
 * @param Model {Model} 需要更新的model
 */
const updateData = (req, res, Model) => {
}

/**
 * 删除数据
 * @param req {Object} 请求
 * @param res {Object} 返回
 * @param Model {Model} 需要执行删除操作的model
 */
const deleteData = (req, res, Model) => {
}

export {
  findList,
  findData,
  saveData,
  updateData,
  deleteData
}
