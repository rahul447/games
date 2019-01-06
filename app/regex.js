if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    containsNumber: function (str) {
      return str.split("").some(each => !isNaN(Number(each)))
    },

    containsRepeatingLetter: function (str) {
      let u = new Set(), dup = false
      for (let i = 0; i <= str.length; i++) {
        if (!isNaN(Number(str[i])) && typeof Number(str[i]) === 'number') {
          dup = false
          break
        }

        if (u.has(str[i])) {
          dup = true;
          break;
        }
        u.add(str[i])
      }
      return dup;
    },

    endsWithVowel: function (str) {
      return ['a', 'e', 'i', 'o', 'u'].some(each => str.replace(/ /g, "").toLowerCase().endsWith(each))
    },

    captureThreeNumbers: function (str) {
      let result = null;
      for (let i = 0; i <= str.length; i++) {
        if (Number(str[i]) && Number(str[i + 1]) && Number(str[i + 2])) {
          result = `${str[i]}${str[i + 1]}${str[i + 2]}`
          break;
        }
      }
      return result || false
    },

    matchesPattern: function (str) {
      if (!Number(str.replace(/-/g, '')))
        return false

      let order = [3, 3, 4]
      return str.split("-").every((s, i) => s.length === order[i])
    },
    isUSD: function (str) {
      return str.startsWith('$') && str[1] !== ',' && (str.split(".")[1] ? str.split(".")[1].length === 2 : true) && !str.includes("_") && str.split(",").every((each, i) => i > 0 ? each.split(".")[0].length === 3 : true)
    }
  };
});
