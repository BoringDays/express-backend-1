/**
 * 查询列表全部数据
 * @param req {Object} 查询参数
 * @param res {Object} 查询参数
 * @param Model {Model}    查询的model
 * @param sort {String}    排序方式
 */
const fullList = (req, res, Model, sort = '-_id') => {
  const page = Number(req.param.page)
  const pageNum = Number(req.params.pageNum)
  const start = page * (pageNum - 1)
  const limit = page * pageNum

  Promise.all([
    Model.find().sort(sort).skip(start).limit(limit).exec(),
    Model.countAsync()
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

export {
  fullList
}
