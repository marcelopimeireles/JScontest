function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

var result1 = slasher([1, 2, 3], 2);
var result2 = slasher(["burgers", "fries", "shake"], 1);

console.log(result1, result2);
