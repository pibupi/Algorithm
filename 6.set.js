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
  // 集合间的操作
  // 并集
  Set.prototype.union = function(otherSet) {
    // 创建新的集合
    var unionSet = new Set()
    // 将A集合中的所有元素添加到新结合中
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    // 取出b集合中的元素，判断是否加入到新集合
    values = otherSet.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    return unionSet
  }
  // 交集
  Set.prototype.intersection = function(otherSet) {
    // 创建新的集合
    var intersectionSet = new Set()
    // 从A中一个一个取出元素，判断是否存在于b集合中
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      var item = values[i]
      if (otherSet.has(item)) {
        intersectionSet.add(item)
      }
    }
    return intersectionSet
  }
  // 差集
  Set.prototype.difference = function(otherSet) {
    // 创建新的集合
    var differenceSet = new Set()
    // 取出a集合中一个个元素，判断是否存在b集合中，不存在则添加到新集合中
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      var item = values[i]
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    }
    return differenceSet
  }
  // 子集
  Set.prototype.subset = function(otherSet) {
    // 遍历集合A中所有元素，看是否都存在b集合中
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      var item = values[i]
      if (!otherSet.has(item)) {
        return false
      }
    }
    return true
  }
}
// 测试
// var set = new Set()
// console.log(set.add('abc'))
// console.log(set.add('ccc'))
// console.log(set.add('ddd'))
// console.log(set.add('mmm'))
// console.log(set.values())
// console.log(set.remove('abc'))
// console.log(set.remove('abc'))
// console.log(set.values())
// console.log(set.has('ccc'))
// console.log(set.size())
// set.clear()
// console.log(set.size())
// 测试集合
// 创建两个集合并添加元素
var setA = new Set()
setA.add('aaa')
setA.add('bbb')
setA.add('ccc')
var setB = new Set()
setB.add('ccc')
setB.add('bbb')
setB.add('fff')
// 求并集
var unionSet = setA.union(setB)
console.log(unionSet.values())
// 交集
var intersectionSet = setA.intersection(setB)
console.log(intersectionSet.values())
// 差集
var differenceSet = setA.difference(setB)
console.log(differenceSet.values())
// 子集
console.log(setA.subset(setB))