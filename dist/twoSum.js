"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = twoSum;
function twoSum(nums, target) {
    const numIndices = new Map();
    for (let i = 0; i < nums.length; i++) {
        const otherNum = target - nums[i];
        if (numIndices.has(otherNum)) {
            return [numIndices.get(otherNum), i];
        }
        numIndices.set(nums[i], i);
    }
    return [];
}
;
//# sourceMappingURL=twoSum.js.map