function getIndexToIns(arr, num) {
  arr.sort(function(a, b){
    return a - b;
  });

  for (var i=0; i<arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

var result = getIndexToIns([40, 50, 5], 19);

console.log(result);
