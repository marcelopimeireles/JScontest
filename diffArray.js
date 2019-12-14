function diffArray(arr1, arr2) {
  var combo = arr1.concat(arr2);

  return combo.filter(function(num) {
    if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
      return num;
    }
  });
}

var result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

console.log(result);
