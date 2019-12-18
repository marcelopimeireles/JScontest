function sumAllByCondition(limit) {
  var result = 0
  for (var i = 0; i <= limit; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
          result += i;
      }
  }
  return result
  
}

var result = sumAllByCondition(1000);

console.log(result);
