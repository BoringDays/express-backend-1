'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('../mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Promise from 'bluebird'

var Schema = _mongoose2.default.Schema;
var SwiperSchema = new Schema({
  index: {
    src: String,
    desc: String
  }
});
var Swiper = _mongoose2.default.model('Swiper', SwiperSchema);

// TODO:为何这里需要用bluebird转换？
// Promise.promisifyAll(User)
// Promise.promisifyAll(User.prototype)

exports.default = Swiper;