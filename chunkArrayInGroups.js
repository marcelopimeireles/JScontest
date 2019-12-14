function chunkArrayInGroups(arr, size) {
  var groups = [];
  while (arr.length > 0) {
    groups.push(arr.splice(0, size));
  }
  return groups;
}

var result = chunkArrayInGroups(["a","b","c","d"], 2);

console.log(result);
