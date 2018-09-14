module.exports = function getZerosCount(number) {
  // your implementation
  var zeros = 0;
  //Заметим, что 5^12 уже больше нашего максимума из условия
  for (var n = 11; n > 0; n--){
    zeros += Math.floor(number/Math.pow(5,n));
  }

  return zeros;

}
