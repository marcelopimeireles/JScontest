function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

var result = confirmEnding("Bastian", "n")

console.log(result);
