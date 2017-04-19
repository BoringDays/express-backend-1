'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _product = require('../model/product');

var _product2 = _interopRequireDefault(_product);

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Swiper from '../model/swiper'
var router = _express2.default.Router();
// import User from '../model/user'


router.route('/products').get(function (req, res, next) {
  utils.findList(req, res, _product2.default);
  next();
}).post(function (req, res, next) {
  // Product.find().exec()
}).put(function (req, res, next) {
  // Product.find().exec()
}).delete(function (req, res, next) {
  // Product.find().exec()
});

router.get('/product/:id', function (req, res, next) {});

exports.default = router;