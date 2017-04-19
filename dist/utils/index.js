'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 已知skip方法在数据量大的时候存在性能问题，因项目不大，暂时无视这些问题
// https://cnodejs.org/topic/51508570604b3d512113f1b3

/**
 * 查询列表分页数据
 * @param req {Object} 请求
 * @param res {Object} 返回
 * @param Model {Model} 查询的model
 * @param sort {String} 排序方式
 */
var findList = function findList(req, res, Model) {
  var sort = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '-_id';

  var page = Number(req.param.page);
  var pageNum = Number(req.params.pageNum);
  var start = page * (pageNum - 1);
  var limit = page * pageNum;

  //eslint-disable-next-line
  debugger;
  Promise.all([Model.find().sort(sort).skip(start).limit(limit).exec(), Model.count()]).then(function (result) {
    var total = result[1];
    var totalPage = Math.ceil(total / limit);

    res.json({
      code: 200,
      data: {
        list: result[0],
        total: total,
        hasNext: totalPage > page ? 1 : 0,
        hasPrev: page > 1 ? 1 : 0
      }
    });
  }).catch(function (err) {
    res.json({
      code: 500,
      errMsg: '' + err
    });
  });
};

/**
 * 查询单条数据
 * @param req {Object} 请求
 * @param res {Object} 返回
 * @param Model {Model} 查询的model
 */
var findData = function findData(req, res, Model) {
  Model.findOne(req.params).exec().then(function (result) {
    res.json({
      code: 200,
      data: result
    });
  }).catch(function (err) {
    res.json({
      code: 500,
      errMsg: '' + err
    });
  });
};

/**
 * 保存数据
 * @param req {Object} 请求
 * @param res {Object} 返回
 * @param Model {Model} 需要保存的model
 */
var saveData = function saveData(req, res, Model) {};

/**
 * 更新数据
 * @param req {Object} 请求
 * @param res {Object} 返回
 * @param Model {Model} 需要更新的model
 */
var updateData = function updateData(req, res, Model) {};

/**
 * 删除数据
 * @param req {Object} 请求
 * @param res {Object} 返回
 * @param Model {Model} 需要执行删除操作的model
 */
var deleteData = function deleteData(req, res, Model) {};

exports.findList = findList;
exports.findData = findData;
exports.saveData = saveData;
exports.updateData = updateData;
exports.deleteData = deleteData;