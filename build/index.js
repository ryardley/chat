'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  res.send('Hello Foo!');
});

var port = process.env.NODE_PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});