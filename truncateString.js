function truncateString(str, num) {
  if (num <= 3) return str.slice(0, num) + "...";
  return str.slice(0, num-3) + "...";
}

var result = truncateString("A-tisket a-tasket A green and yellow basket", 15);

console.log(result);