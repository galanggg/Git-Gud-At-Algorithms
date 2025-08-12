/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const str1 = s.split('').sort()
    const str2 = t.split('').sort()

    for (let i=0; i < str2.length; i++) {
      if(str1[i] !== str2[i]) {
        return str2[i]
      }
    }
};
