// 双向链表
function DublyLinkedList() {
  //  内部类
  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
  this.head = null
  this.tail = null
  this.length = 0
  // 常见操作：
  // 追加方法
  DublyLinkedList.prototype.append = function(element) {
    // 1.根据元素创建节点
    var newNode = new Node(element)

    // 2.判断列表是否为空列表
    if (this.head == null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    // 3.length+1
    this.length++
  }
  // forwardString()
  DublyLinkedList.prototype.toString = function() {
    return this.backwordString()
  }
  DublyLinkedList.prototype.forwardString = function() {
    // 定义变量
    var current = this.tail
    var resultString = ''
    // 一次向前遍历，获取每一个节点
    while (current) {
      resultString += current.data + ''
      current = current.prev
    }
    return resultString
  }
  DublyLinkedList.prototype.backwordString = function() {
    // 定义变量
    var current = this.head
    var resultString = ''
    // 一次向后遍历，获取每一个节点
    while (current) {
      resultString += current.data + ''
      current = current.next
    }
    return resultString
  }
  DublyLinkedList.prototype.insert = function(position, data) {
    // 越界判断
    if (position < 0 || position > this.length) return false
    // 根据data创建新的节点
    var newNode = new Node(data)
    // 判断原来的列表是否为空
    if (this.length == 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      // 判断position是否为0
      if (position == 0) {
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      } else if (position == this.length) {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
      } else {
        var current = this.head
        var index = 0
        while (index++ < position) {
          current = current.next
        }
        // 修改指针
        newNode.next = current
        newNode.prev = current.prev
        current.prev.next = newNode
        current.prev = newNode
      }
    }
    this.length += 1
    return true
  }
  // get
  DublyLinkedList.prototype.get = function(position) {
    // 越界判断
    if (position < 0 || position >= this.length) return null
    // this.length /2 > position : 从头向后遍历
    // this.length /2 < position : 从后向头遍历
    // 可以用以上思路进行优化
    var current = this.head
    var index = 0
    while (index++ < position) current = current.next
    return current.data
  }
  // indexOf
  DublyLinkedList.prototype.indexOf = function(data) {
    // 定义变量
    var current = this.head
    var index = 0
    while (current) {
      if (current.data == data) {
        return index
      }
      current = current.next
      index += 1
    }
    return -1
  }
  DublyLinkedList.prototype.update = function(position, newData) {
    // 越界判断
    if (position < 0 || position >= this.length) return false
    // this.length /2 > position : 从头向后遍历
    // this.length /2 < position : 从后向头遍历
    // 可以用以上思路进行优化
    // 寻找正确的节点
    var current = this.head
    var index = 0
    while (index++ < position) {
      current = current.next
    }
    // 修改找到节点的data信息
    current.data = newData
    return true
  }
  DublyLinkedList.prototype.removeAt = function(position) {
    // 越界判断
    if (position < 0 || position >= this.length) return null
    // 判断是否只有一个节点
    var current = this.head
    if (this.length == 1) {
      this.head = null
      this.tail = null
    } else {
      // 删除的是否是第一个节点
      if (position == 0) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position == this.length - 1) {
        current = this.tail
        this.tail.prev.next = null
        this.tail = this.tail.next
      } else {
        var index = 0
        // var current = this.head
        while (index++ < position) {
          current = current.next
        }
        current.prev.next = current.next
        current.next.prev = current.prev
      }
    }
    this.length - 1
    return current.data
  }
  DublyLinkedList.prototype.remove = function(data) {
    // 根据data获取下标值
    var index = this.indexOf(data)
    // 根据Index删除对应位置的节点
    return this.removeAt(index)
  }
  DublyLinkedList.prototype.isEmpty = function() {
    return this.length == 0
  }
  DublyLinkedList.prototype.size = function() {
    return this.length
  }
  // 获取链表的第一个元素
  DublyLinkedList.prototype.getHead = function() {
    return this.head.data
  }
  // 获取链表的最后个元素
  DublyLinkedList.prototype.getTail = function() {
    return this.tail.data
  }
}
// 测试
var list = new DublyLinkedList()
list.append('abc')
list.append('cba')
list.append('nba')
// console.log(list.backwordString())
// console.log(list.forwardString())
// console.log(list.toString())
list.insert(0, 'ccc')
list.insert(4, 'bbb')
list.insert(2, 'yyy')
console.log(list.toString())
console.log(list.get(3))
console.log(list.indexOf('cba'))
console.log(list.indexOf('ppp'))
list.update(0, 'mmm')
console.log(list.toString())
console.log(list.removeAt(1))
console.log(list.toString())
console.log(list.removeAt(0))
console.log(list.toString())
console.log(list.remove('nba'))
console.log(list.toString())
console.log(list.isEmpty())
console.log(list.size())
console.log(list.getHead())
console.log(list.getTail())
