/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const temp = {}

    for (const data of nums) {
      if(temp[data] === undefined) {
         temp[data] = 1
      } else {
        temp[data] += 1
      }
    }
  const result = Object.entries(temp).sort((a,b) => {
    return b[1] - a[1]
  })

  return result.splice(0, k).map(data => Number(data[0]))
};
