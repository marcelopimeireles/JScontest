function sumAllByConditionRecursive(limit, result) {
  var result = (!result) ? 0 : result;
  
  if (limit === 0) return result;

  for (var i = 0; i <= limit; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
          result += i;
      }
  }
  return sumAllByConditionRecursive((limit-1), result)
  
}

var result = sumAllByCondition(1000);

console.log(result);
