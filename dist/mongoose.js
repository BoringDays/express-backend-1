'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost/app_database_1');

// 让mongoose使用原生的promise
// 参考：http://mongoosejs.com/docs/promises.html
_mongoose2.default.Promise = global.Promise;

exports.default = _mongoose2.default;