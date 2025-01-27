"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeetCode = void 0;
const frequencyCount_1 = require("./frequencyCount");
class LeetCode {
    result(a) {
        console.log('cls result->', a); // Output: [0, 1]
    }
}
exports.LeetCode = LeetCode;
const leetCode = new LeetCode();
// console.log('result->', leetCode.result(twoSum([3,2,4], 6)));
// console.log('result->', leetCode.result(findMedianSortedArrays([2,7,11,15], [9]))); 
console.log('result->', leetCode.result((0, frequencyCount_1.frequencyCountString)('hello')));
//# sourceMappingURL=index.js.map