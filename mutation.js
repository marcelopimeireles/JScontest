function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();

  for (var letter of secondWord) {
    if (firstWord.indexOf(letter) === -1) return false;
  }

  return true;
}

var result = mutation(["hello","hey"]);

console.log(result);
