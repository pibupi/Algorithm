// hash表

function HashTable() {
  // 属性
  this.storage = []
  this.count = 0
  this.limit = 7
  // 方法
  // 哈希函数
  HashTable.prototype.hashFunc = function(str, size) {
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
  // 插入/修改
  HashTable.prototype.put = function(key, value) {
    // 1.根据key获取对应的Index
    var index = this.hashFunc(key, this.limit)
    // 2.根据Index取出对应的bucket
    var bucket = this.storage[index]
    // 3.判断该buccket是否为null
    if (bucket == null) {
      bucket = []
      this.storage[index] = bucket
    }
    // 4.判断是否是修改数据
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] == key) {
        tuple[1] = value
        return
      }
    }
    // 5.进行添加操作
    bucket.push([key, value])
    this.count += 1
    // 判断是否需要扩容
    if (this.count > this.limit * 0.75) {
      var newSize = this.limit * 2
      var newPrime = this.getPrime(newSize)
      this.resize(newPrime)
    }
  }
  // 获取
  HashTable.prototype.get = function(key) {
    // 1.根据key获取对应的Index
    var index = this.hashFunc(key, this.limit)
    // 2.根据index获取对应的bucket
    var bucket = this.storage[index]
    // 判断bucket是否为Null
    if (bucket == null) {
      return null
    }
    // 有bucket ，进行线性查找
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] == key) {
        return tuple[1]
      }
    }
    // 依然没有找到
    return null
  }
  // 删除
  HashTable.prototype.remove = function(key) {
    // 1.根据key获取对应的Index
    var index = this.hashFunc(key, this.limit)
    // 2.根据index获取对应的bucket
    var bucket = this.storage[index]
    // 3.判断Bucket是否为Null
    if (bucket == null) return null
    // 4.有Bucket，进行线性查找，并删除
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] == key) {
        bucket.splice(i, 1)
        this.count--
        return tuple[1]
        // 缩小容量
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          var newSize = Math.floor(this.limit / 2)
          var newPrime = this.getPrime(newSize)
          this.resize(newPrime)
        }
      }
    }
    // 5.依然没有找到，返回Null
    return null
  }
  // 其他方法：
  // 判断哈希表是否为null
  HashTable.prototype.isEmpty = function() {
    return this.count == 0
  }
  // 获取哈希表中元素的个数
  HashTable.prototype.size = function() {
    return this.count
  }
  // 哈希表扩容
  HashTable.prototype.resize = function(newLimit) {
    // 1.保存旧的数组内容
    var oldStorage = this.storage
    // 2.重置所有的属性
    this.storage = []
    this.count = 0
    this.limit = newLimit
    // 3.遍历oldStorage中所有的bucket
    for (var i = 0; i < oldStorage.length; i++) {
      // 取出对应的Bucket
      var bucket = oldStorage[i]
      // 判断bucket是否为null
      if (bucket == null) {
        continue
      }
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    }
  }
  // 判断是否是质数
  HashTable.prototype.isPrime = function(num) {
    // 1.获取num的平方根
    var temp = parseInt(Math.sqrt(num))
    for (var i = 2; i <= temp; i++) {
      if (num % i == 0) {
        return false
      }
    }
    return true
  }
  // 获取质数的方法
  HashTable.prototype.getPrime = function(num) {
    while (!this.isPrime(num)) {
      num++
    }
    return num
  }
}
// 测试
var ht = new HashTable()
ht.put('abc', '123')
ht.put('cba', '321')
ht.put('nba', '521')
ht.put('mba', '520')
console.log(ht.get('abc'))
ht.put('abc', '111')
console.log(ht.get('abc'))
ht.remove('abc')
console.log(ht.get('abc'))
