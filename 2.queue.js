// 队列的实现和栈一样，有两种方案：
// 1.数组
// 2.链表
function Queue() {
  // 属性
  this.items = []
  // 方法
  // 1.将蒜素加入到队列中
  Queue.prototype.enqueue = function(element) {
    this.items.push(element)
  }
  // 2.从队列中删除前端元素
  Queue.prototype.dequeue = function() {
    return this.items.shift()
  }
  // 3.查看前端元素
  Queue.prototype.front = function() {
    return this.items[0]
  }
  // 4.查看队列是否为空
  Queue.prototype.isEmpty = function() {
    return this.items.length == 0
  }
  // 5.查看队列中元素的个数
  Queue.prototype.size = function() {
    return this.items.length
  }
  // 6.tostring方法
  Queue.prototype.toString = function() {
    var resultString = ''
    for (var i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + ''
    }
    return resultString
  }
}
// 使用队列
var queue = new Queue()
queue.enqueue('abc')
queue.enqueue('cba')
queue.enqueue('nba')
queue.enqueue('mba')
console.log(queue)
queue.dequeue()
queue.dequeue()
console.log(queue)
console.log(queue.front())
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.toString())
// 击鼓传花
function passGame(nameList, num) {
  // 1.创建一个队列结构
  var queue = new Queue()
  // 2.将所有人依次加入到队列中
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  // 3.开始数数字
  while (queue.size() > 1) {
    // 不是Num的时候，重新加入到队列的末尾
    // 是num这个数字的时候，将其从队列中删除
    // num数字之前的人重新放入到队列的末尾
    for (var i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
    // num对应的这个人，直接从队列中删除掉
  }
  // 4.获取剩下的那个人
  console.log(queue.size())
  var endName = queue.front()
  console.log('最终剩下的那个人', endName)
  return nameList.indexOf(endName)
}
// 测试击鼓传花
names = ['lili', 'lucy', 'tom', 'lilei', 'zh']
console.log(passGame(names, 3))
