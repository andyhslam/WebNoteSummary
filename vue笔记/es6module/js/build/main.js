'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = _interopRequireDefault(_module2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log(fn1);
// console.log(fn2);
(0, _module.fn1)();
(0, _module.fn2)();
_module3.default.fn1();
_module3.default.fn2();