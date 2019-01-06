if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    alterContext: function (fn, obj) {
      return fn.apply(obj)
    },

    alterObjects: function (constructor, greeting) {
      constructor.prototype.greeting = greeting
    },

    iterate: function (obj) {
      let arr = []
      for (let [key, value] of Object.entries(obj)) {
        arr.push(`${key}: ${value}`)
      }
      return arr
    }
  };
});
