if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count: function (start, end) {
      let curr = start
      let loopRun = true
      while (curr <= end) {
        setTimeout(() => {
          loopRun && console.log(curr)
        }, 600)
        curr++;
      }
      return {
        "cancel": () => {
          loopRun = false
        }
      }
    }
  };
});