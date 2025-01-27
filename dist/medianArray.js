"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMedianSortedArrays = findMedianSortedArrays;
function findMedianSortedArrays(nums1, nums2) {
    let result = 0;
    nums1 = nums1.sort((n1, n2) => n1 - n2);
    nums2 = nums2.sort((n1, n2) => n1 - n2);
    result = (nums1[nums1.length - 1] + nums2[0]) / 2;
    return result;
}
;
//# sourceMappingURL=medianArray.js.map