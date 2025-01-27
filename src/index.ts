import { findMedianSortedArrays } from "./medianArray";
import { twoSum } from "./twoSum";
import { frequencyCountString } from "./frequencyCount";

export class LeetCode {
    result(a: any){
        console.log('cls result->', a); // Output: [0, 1]
    }
}

const leetCode = new LeetCode();
// console.log('result->', leetCode.result(twoSum([3,2,4], 6)));
console.log('result->', leetCode.result(findMedianSortedArrays([1,3], [2]))); 
// console.log('result->', leetCode.result(frequencyCountString('hello')));

