function findMax(arr) {
  var max = arr[0];
  for(var i=0; i<arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function largestOfFour(arr) {
  var maxes = [];
  for (var i=0; i<arr.length; i++) {
    var innerMax = findMax(arr[i]);
    maxes.push(innerMax);
  }
  return maxes;
}

var result = largestOfFour([[], [], [], []]);

console.log(result);
