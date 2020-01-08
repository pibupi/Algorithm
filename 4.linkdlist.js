// 单向链表
function LinkdList() {
  // 内部的类：节点类
  function Node(data) {
    this.data = data
    this.next = null
  }
  // 属性
  this.head = null
  this.length = 0
  // 追加方法
  LinkdList.prototype.append = function(data) {
    // 1.先通过data创建新节点
    // var newNode = new Node(data)
    // 判断是否添加的是第一个节点
    if (this.length == 0) {
      var newNode = new Node(data)
      this.head = newNode
    } else {
      // 找到最后一个节点
      var newNode = new Node(data)
      var current = this.head
      while (current.next) {
        current = current.next
      }
      // 让最后节点的next指向后面的节点
      current.next = newNode
    }
    this.length += 1
  }
  // toString方法
  LinkdList.prototype.toString = function() {
    // 1.定义变量
    var current = this.head
    var listString = ''
    // 2.循环获取一个个节点
    while (current) {
      listString += current.data + ' '
      current = current.next
    }
    return listString
  }
  // insert方法
  LinkdList.prototype.insert = function(position, data) {
    // 对position进行越界判断
    if (position < 0 || position > this.length) return false
    // 根据data创建newNode
    var newNode = new Node(data)
    // 判断插入的位置是否是第一个
    if (position == 0) {
      // 原来的
      newNode.next = this.head
      this.head = newNode
    } else {
      var index = 0
      var current = this.head
      var previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous.next = newNode
    }
    // 4.length+1
    this.length += 1
    return true
  }
  LinkdList.prototype.get = function(position) {
    // 越界判断
    if (position < 0 || position >= this.length) return null
    // 获取对应的数据
    var current = this.head
    var index = 0
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }
  // indexOf
  LinkdList.prototype.indexOf = function(data) {
    // 定义变量
    var current = this.head
    var index = 0
    // 开始查找
    while (current) {
      if (current.data == data) {
        return index
      }
      current = current.next
      index += 1
    }
    // 没有找到，返回-1
    return -1
  }
  LinkdList.prototype.update = function(position, newData) {
    // 判断越界
    if (position < 0 || position >= this.length) return false
    // 查找真确的节点
    var current = this.head
    var index = 0
    while (index++ < position) {
      current = current.next
    }
    // 将position位置的node的data修改成newData
    current.data = newData
    return true
  }
  LinkdList.prototype.removeAt = function(position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return false
    // 判断是否删除的是第一个节点
    var current = this.head
    if (position == 0) {
      this.head = this.head.next
    } else {
      var index = 0
      var previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length -= 1
    return current.data
  }
  LinkdList.prototype.remove = function(data) {
    // 1.根据data获取在列表中的位置
    var position = this.indexOf(data)
    // 根据位置信息，删除节点
    return this.removeAt(position)
  }
  LinkdList.prototype.isEmpty = function() {
    return this.length == 0
  }
  LinkdList.prototype.size = function() {
    return this.length
  }
}
// 测试代码
var list = new LinkdList()
list.append('aaa')
list.append('bbb')
list.append('ccc')
console.log(list.toString())
list.insert(0, 'ddd')
list.insert(3, 'eee')
list.insert(5, 'fff')
console.log(list.toString())
console.log(list.get(0))
console.log(list.get(3))
console.log(list.get(5))
console.log(list.indexOf('ddd'))
console.log(list.indexOf('ggg'))
list.removeAt(0, 'yyy')
console.log(list.toString())
list.remove('eee')
console.log(list.toString())
list.remove('iii')
console.log(list.toString())
console.log(list.isEmpty())
console.log(list.size())