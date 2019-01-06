if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    createModule: function (str1, str2) {
      let obj = {
        "name": str2,
        "greeting": str1
      };

      obj.sayIt = () => {
        return `${obj.greeting}, ${obj.name}`
      }

      return obj;

    }
  };
});

