function titleCase(str) {
  var titled = str.toLowerCase().split(" ").map(function(elem) {
    return elem[0].toUpperCase() + elem.slice(1);
  })

  return titled.join(" ");
}

var result = titleCase("I'm a little tea pot sure and stout");

console.log(result);
