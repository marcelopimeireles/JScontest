function bouncer(arr) {
  return arr.filter(function(elem){
    return elem;
  });
}

var result = bouncer([7, "ate", "", false, 9, "hey", undefined]);

console.log(result);
