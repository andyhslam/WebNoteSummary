import _ from 'lodash';
import Header from './components/Header.js';
const math = require('/src/math');

console.log(math.add(5, 6));
console.log(_.join(['hello', 'webpack'], ' '));
console.log(Header());
