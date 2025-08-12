/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //clean the string by removing non-alphanumeric characters and converting to lowercase
    const filteredString = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    const data = filteredString.split('')

    let L = 0
    let R = data.length - 1

    while (L < R) {
        //check if characters at L and R are equal
      if (data[L] !== data[R]) {
        return false
      }
        //move towards the center
      L += 1
      R -= 1
    }
    //if all characters matched, it is a palindrome
    return true
};
