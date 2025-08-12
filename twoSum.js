/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const results = []

    for(let i=0; i < nums.length; i++) {
        for(let j= i+1; j < nums.length; j++) {
            const a = nums[i] + nums[j]
            if(a === target) {
                results.push(i,j)
            }
        }
    }

    return results
};
