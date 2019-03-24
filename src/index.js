module.exports = function check(str, bracketsConfig) {
  let open = [];
  let close = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    open[i] = bracketsConfig[i][0];
    close[i] = bracketsConfig[i][1];
  }

  let arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    for (let index in open) {
      if (arr[i] == open[index]) {
        if (arr[i + 1] == close[index]) {
          arr.splice(i, 2);
          console.log(arr);
          i -= i + 1;
        }
      }
    }
  }
  if (arr.length !== 0) {
    return false;
  } else {
    return true;
  }
};
