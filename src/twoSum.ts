export function twoSum(nums: number[], target: number): number[] {
    const numIndices = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const otherNum = target - nums[i];
        if (numIndices.has(otherNum)) {
            return [numIndices.get(otherNum)!, i];
        }
        numIndices.set(nums[i], i);
    }
    return []
};