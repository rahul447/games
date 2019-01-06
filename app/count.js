if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count: function (start, end) {
      let curr = start
      let loopRun = true
      while (curr <= end) {
        ((curr, loopRun) => {
          setTimeout(() => {
            loopRun && console.log(curr)
          }, 600)
        })(curr, loopRun)
        curr++;
      }
      return {
        "cancel": function () {
          loopRun = false
        }
      }
    }
  };
});