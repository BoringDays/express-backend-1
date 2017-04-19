'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import multer from 'multer'
var app = (0, _express2.default)();
// const upload = multer()
var port = 3000;

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _morgan2.default)('dev'));

app.use('/api', _index2.default);

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port + '\n');
});