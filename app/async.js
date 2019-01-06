if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['jquery'], function ($) {
  return {
    async: function (value) {
      return Promise.resolve(value)
    },

    manipulateRemoteData: function (url) {
      return new Promise((resolve) => {
        $.getJSON(url, data => {
          let response = data["people"].reduce((acc, curr, index) => {
            acc.unshift(curr.name)
            return acc
          }, [])
          resolve(response)
        })
      })
    }
  };
});
