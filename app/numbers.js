if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    valueAtBit: function (num, bit) {
      let bitval = Number(num).toString(2)
      return Number(bitval[bitval.length - bit])
    },

    base10: function (str) {
      return parseInt(str, 2)
    },

    convertToBinary: function (num) {
      let result = Number(num).toString(2)
      while (result.length !== 8) {
        result = '0' + result
      }
      return result
    },

    multiply: function (a, b) {
      let mulRes = (a * b);
      let str = String(mulRes).split(".")[1]
      let i = 0, s = Number(str[i])
      while (Number(s) === 0) {
        i++;
        s = str[i]
      }
      let result = Number((a * b).toFixed(i + 1));
      return result
    }
  };
});

