// 数据结构就是在计算机中，存储和组织数据的方式，以合适合理的方式组织这些数据
// 计算机中数据量非常庞大，如何以高校的方式组织和存储
// 封装 栈类
// method : 和某一个对象实例有联系
function Stack() {
  this.items = [] // 栈中的属性
  // 栈的相关操作
  // 1. 将元素压入栈
  Stack.prototype.push = function(element) {
    this.items.push(element)
  }
  // 2. 从栈中取出元素
  Stack.prototype.pop = function() {
    return this.items.pop()
  }
  // 3. 查看一下栈顶元素
  Stack.prototype.peek = function() {
    return this.items[this.items.length - 1]
  }
  // 4.判断栈是否为空
  Stack.prototype.isEmpty = function() {
    return this.items.length == 0
  }
  //5.获取栈中元素的个数
  Stack.prototype.size = function() {
    return this.items.length
  }
  // 6.toString方法
  Stack.prototype.toString = function() {
    var resultString = ''
    for (var i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ''
    }
    return resultString
  }
}
// 栈的使用
var s = new Stack()
s.push(20)
s.push(10)
s.push(100)
s.push(77)
console.log(s)
s.pop()
s.pop()
console.log(s)
console.log(s.peek())
console.log(s.isEmpty())
console.log(s.size())
console.log(s.toString())
// 将十进制转成二进制
function dec2bin(decNumber) {
  // 1.定义栈对象用来保存余数的
  var stack = new Stack()
  // 2.循环操作
  while (decNumber > 0) {
    //2.1 获取余数，并且放入栈中
    stack.push(decNumber % 2)
    // 2.2 获取整除后的结果作为下一次运算的数字
    decNumber = Math.floor(decNumber / 2)
  }
  // 3.从栈中取出0和1
  var binaryString = ''
  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString
}
// 测试十进制转为二进制的函数
console.log('二进制为：',dec2bin(100))
console.log('二进制为：',dec2bin(1000))
console.log('二进制为：',dec2bin(10000))
