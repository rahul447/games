if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {

  const recur = (obj, extension, store) => {
    obj.files.map(curr => {
      typeof curr === 'object' ? store.concat(recur(curr, extension, store)) : (extension.some(ext => curr.endsWith(ext)) ? store.push(curr) : '')
    })
  }

  return {
    listFiles: function (data, dirName) {
      let extension = dirName ? [dirName] : ['.html', '.js', '.css']
      let store = []
      recur(data, extension, store);
      return store;
    },

    permute: function (arr) {
      let store = []
      if (arr.length === 1) {
        store.push(arr[0]);
        return store
      }

      for (let i = 0; i <= arr.length; i++) {
        let first = arr[i]
        let rest = arr.reduce((acc, curr) => {
          curr !== first && acc.push(curr)
          return acc
        }, [])

        let innerPermutes = this.permute(rest)
        for (let j = 0; j < innerPermutes.length; j++) {
          store.push([first, ...innerPermutes[j]])
        }
      }

      return store;
    }
  };
});
