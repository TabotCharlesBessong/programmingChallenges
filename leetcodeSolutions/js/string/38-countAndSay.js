/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function (n) {

  let globalValue = ''
  let i = 1
  while (i <= n) {
      if (i == 1) {
          globalValue = '1'
      }
      else {
          let string = ''
          let counter = 1
          for (let j = 0; j < globalValue.length; j++) {
              if (globalValue[j] !== globalValue[j + 1]) {
                  string += `${counter}` + globalValue[j]
                  counter = 1
              }
              else if (globalValue[j] == globalValue[j + 1]) {

                  counter++
              }
          }
          globalValue = string
      }
      i++
  }
  return globalValue
};

console.log(countAndSay('1231421351'))