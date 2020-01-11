// 哈希函数
// 将字符串转成比较大的数字：hashCode
// 将大的数字hashCode压缩到数组范围（大小）之内
function hashFunc(str, size) {
  // 定义hashCode变量
  var hashCode = 0
  // 霍纳法则,来计算hashCode的值
  for (var i = 0; i < str.length; i++) {
    // 获取比较大的hashCode值
    hashCode = 37 * hashCode + str.charCodeAt(i)
  }
  var index = hashCode % size
  return index
}
// 测试
console.log(hashFunc('abc', 7))
console.log(hashFunc('cba', 7))
console.log(hashFunc('nba', 7))
console.log(hashFunc('mba', 7))
