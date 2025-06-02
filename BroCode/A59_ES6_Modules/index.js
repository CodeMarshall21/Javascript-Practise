// ES6 Module = An external file that contains reusable code
//                          that can be imported into other JavaScript files
//                          Can contain variables, classes, functions ... and more
//                          Introduced as part of ECMAScript 2015 update

import {PI, getArea, getCircumference, getVolume} from './MathUtil.js';


console.log(`PI => `, PI);
const cicumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`cicumference => `,cicumference.toFixed(2));
console.log(`area => `,area.toFixed(2));
console.log(`volume => `,volume.toFixed(2));