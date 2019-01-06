if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    indexOf: function (arr, item) {
      return arr.indexOf(item)
    },

    sum: function (arr) {
      return arr.reduce((acc, curr) => acc + curr, 0)
    },

    remove: function (arr, item) {
      return arr.reduce((acc, curr) => {
        curr !== item && acc.push(curr)
        return acc
      }, [])
    },

    removeWithoutCopy: function (arr, item) {
      let i = arr.length;
      while (i >= 0) {
        arr[i] === item && arr.splice(i, 1)
        i--;
      }
      return arr
    },

    append: function (arr, item) {
      arr.push(item)
      return arr
    },

    truncate: function (arr) {
      arr.splice(arr.length - 1, 1)
      return arr
    },

    prepend: function (arr, item) {
      arr.unshift(item)
      return arr
    },

    curtail: function (arr) {
      arr.shift()
      return arr
    },

    concat: function (arr1, arr2) {
      return [...arr1, ...arr2]
    },

    insert: function (arr, item, index) {
      arr.splice(index, 0, item)
      return arr
    },

    count: function (arr, item) {
      return arr.reduce((acc, curr) => {
        acc = curr === item ? acc + 1 : acc
        return acc
      }, 0)
    },

    duplicates: function (arr) {
      const uniques = arr.reduce((acc, curr, index, array) => {
        const i = array.indexOf(curr)
        i !== index && i >= 0 && acc.add(curr)
        return acc
      }, new Set())
      return Array.from(uniques)
    },

    square: function (arr) {
      return arr.reduce((acc, curr) => {
        acc.push(curr * curr)
        return acc
      }, [])
    },

    findAllOccurrences: function (arr, target) {
      return arr.reduce((acc, curr, index) => {
        curr === target && acc.push(index)
        return acc
      }, [])
    }
  };
});
