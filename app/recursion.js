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
      let strArr = arr.join("")
      let store = []
      if (strArr.length === 1) {
        store.push(strArr);
        return store
      }

      for (let i = 0; i <= strArr.length; i++) {
        let first = strArr[i]
        let rest = strArr.substring(0, i) + strArr.substring(i + 1);
        let innerPermutes = this.permute(rest)
        for (let j = 0; j < innerPermutes.length; j++) {
          store.push(first + innerPermutes[j])
        }
      }
      console.log("store : ", store);
      return store;
    }
  };
});
