// 判断质数
function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}
// 测试
console.log(isPrime(2))
console.log(isPrime(11))
console.log(isPrime(15))
// 高效率
function isPrime2(num) {
  // 1.获取num的平方根
  var temp = parseInt(Math.sqrt(num))
  for (var i = 2; i <= temp; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}
console.log(isPrime2(2))
console.log(isPrime2(11))
console.log(isPrime2(15))