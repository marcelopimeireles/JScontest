function repeatStringnumTimes(str, num) {
  if (num < 0) return "";
  if (num === 0) return str;

  return str + repeatStringnumTimes(str, num -1);
}

var result = repeatStringnumTimes("abc", 3);

console.log(result);