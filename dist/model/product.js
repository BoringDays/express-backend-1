'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('../mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Promise from 'bluebird'

var Schema = _mongoose2.default.Schema;
var ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: String,
  descImg: String,
  content: String,
  isHot: Boolean,
  type: Number
});
var Product = _mongoose2.default.model('Product', ProductSchema);

// TODO:为何这里需要用bluebird转换？
// Promise.promisifyAll(Product)
// Promise.promisifyAll(Product.prototype)

exports.default = Product;