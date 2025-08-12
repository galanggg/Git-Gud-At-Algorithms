/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map()


  for(const data of strs) {
    const reverse = data.split('').sort().join('')

    if(!map.has(reverse)){
      map.set(reverse, [])
    }

    map.get(reverse).push(data)
  }
  return Array.from(map.values())
};
