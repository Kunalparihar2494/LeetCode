export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let result = 0;
    nums1 = nums1.concat(nums2);
    nums1.sort((a, b) => a - b);
    let length = nums1.length;
    if(length % 2 === 0){
       return result = (nums1[length/2] + nums1[length/2 - 1]) / 2;
    }else{
        return nums1[Math.floor(length/2)];
    }
};