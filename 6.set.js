// 集合
function Set() {
  // 属性
  this.items = {}
  // 方法
  Set.prototype.add = function(value) {
    // 判断当前集合中是否已经包含了该元素
    if (this.has(value)) {
      return false
    }
    // 将元素添加到集合中
    this.items[value] = value
    return true
  }
  Set.prototype.has = function(value) {
    return this.items.hasOwnProperty(value)
  }
  Set.prototype.remove = function(value) {
    // 1.判断该集合中是否包含该元素
    if (!this.has(value)) {
      return false
    }
    delete this.items[value]
    return true
  }
  Set.prototype.clear = function() {
    this.items = {}
  }
  Set.prototype.size = function() {
    return Object.keys(this.items).length
  }
  Set.prototype.values = function() {
    return Object.keys(this.items)
  }
}
// 测试
var set = new Set()
console.log(set.add('abc'))
console.log(set.add('ccc'))
console.log(set.add('ddd'))
console.log(set.add('mmm'))
console.log(set.values())
console.log(set.remove('abc'))
console.log(set.remove('abc'))
console.log(set.values())
console.log(set.has('ccc'))
console.log(set.size())
set.clear()
console.log(set.size())