if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    argsAsArray: function (fn, arr) {
      return fn(...arr)
    },

    speak: function (fn, obj) {
      return fn.bind(obj)()
    },

    functionFunction: function (str) {
      return str2 => `${str}, ${str2}`
    },

    makeClosures: function (arr, fn) {
      return arr.reduce((acc, curr) => {
        acc.push(fn.bind(this, curr))
        return acc
      }, [])
    },

    partial: function (fn, str1, str2) {
      return fn.bind(null, str1, str2);

    },

    useArguments: function (...rest) {
      return rest.length === 1 ? rest[0] : (rest.reduce((acc, curr) => acc + curr, 0))
    },

    callIt: function (fn, ...rest) {
      fn(...rest)
    },

    partialUsingArguments: function (fn, ...fnArgs) {
      return function part(...args) {
        return fn(...fnArgs, ...args)
      }
    },

    curryIt: function (fn) {
      return function curried() {
        let args = [].slice.call(arguments);
        return args.length >= fn.length ? fn.apply(null, args) : () => {
          let rest = [].slice.call(arguments);
          return curried.apply(null, args.concat(rest));
        };
      };
    }
  };
});
