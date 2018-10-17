// TO RUN: from the root directory, run > node app

// good old lodash to the rescue
const _ = require('lodash');

// the un-flattened array
let demoArray = [[1,2,[3]],4];

// result -> [1,2,3,4]
console.log(_.flattenDeep(demoArray));

// done!
