// 二叉搜索树
function BinarySearchTree() {
  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  // 属性
  this.root = null
  // 方法
  // 插入数据
  BinarySearchTree.prototype.insert = function(key) {
    // 根据key创建节点
    var newNode = new Node(key)
    // 判断根节点是否有值
    if (this.root == null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  BinarySearchTree.prototype.insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      // 向左查找
      if (node.left == null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      // 向右查找
      if (node.right == null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  // 先序遍历
  BinarySearchTree.prototype.preOrderTraversal = function(handler) {
    this.preOrderTraversalNode(this.root, handler)
  }
  BinarySearchTree.prototype.preOrderTraversalNode = function(node, handler) {
    if (node != null) {
      // console.log(node.key)
      // 处理经过的节点
      handler(node.key)
      // 处理经过的左子节点
      this.preOrderTraversalNode(node.left, handler)
      // 处理经过几点的右子节点
      this.preOrderTraversalNode(node.right, handler)
    }
  }
  // 中序遍历
  BinarySearchTree.prototype.midOrderTraversal = function(handler) {
    this.midOrderTraversalNode(this.root, handler)
  }
  BinarySearchTree.prototype.midOrderTraversalNode = function(node, handler) {
    if (node != null) {
      // 处理左子树中的节点
      this.midOrderTraversalNode(node.left, handler)
      // 处理节点
      handler(node.key)
      this.midOrderTraversalNode(node.right, handler)
    }
  }
  // 后序遍历
  BinarySearchTree.prototype.postOrderTravelsal = function(handler) {
    this.postOrderTravelsalNode(this.root, handler)
  }
  BinarySearchTree.prototype.postOrderTravelsalNode = function(node, handler) {
    if (node != null) {
      // 处理左子树中的节点
      this.postOrderTravelsalNode(node.left, handler)
      // 查找右子树中的节点
      this.postOrderTravelsalNode(node.right, handler)
      handler(node.key)
    }
  }
  // 最大值
  BinarySearchTree.prototype.max = function() {
    var node = this.root
    // 向右一次查找，直到节点为null
    var key = null
    while (node != null) {
      key = node.key
      node = node.right
    }
    return key
  }
  // 最小值
  BinarySearchTree.prototype.min = function() {
    var node = this.root
    // 依次向左查找
    var key = null
    while (node != null) {
      key = node.key
      node = node.left
    }
    return key
  }
  // 搜索
  BinarySearchTree.prototype.search = function(key) {
    // 获取根节点
    var node = this.root
    // 循环搜索key
    while (node != null) {
      if (key < node.key) {
        node = node.left
      } else if (key > node.key) {
        node = node.right
      } else {
        return true
      }
    }
    return false
  }
  // 删除
  BinarySearchTree.prototype.remove = function(key) {
    // 1.寻找要删除的节点
    var current = this.root // 假定要删除的节点
    var parent = this.root
    var isLeftChild = true
    // 开始寻找删除的节点
    while (current.key != key) {
      parent = current
      if (key < current.key) {
        isLeftChild = true
        current = current.left
      } else {
        isLeftChild = false
        current = current.right
      }
      // 某种情况:已经找到了最后的节点，依然没有找到
      if (current == null) return false
    }
    // 2.根据对应的情况删除节点
    // 删除的节点是叶子节点(没有子节点)
    if (current.left == null && current.right == null) {
      if (current == this.root) {
        this.root = null
      } else if (isLeftChild) {
        parent.left = null
      } else {
        parent.right = null
      }
    }
    // 删除的节点有一个子节点
    else if (current.right == null) {
      if (current == this.root) {
        this.root = current.left
      } else if (isLeftChild) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else if (current.left == null) {
      if (current == this.root) {
        this.root = curr.right
      } else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    }
    // 删除的节点有两个子节点
    // 找到了current.key = key
    else {
      // 获取后继节点
      var successor = this.getSuccesor(current)
      // 判断是否是根节点
      if (current == this.root) {
        this.root = successor
      } else if (isLeftChild) {
        parent.left = successor
      } else {
        parent.right = successor
      }
      // 将删除节点的左子树= current.left
      successor.left = current.left
    }
  }
  // 找后继的方法
  BinarySearchTree.prototype.getSuccesor = function(delNode) {
    // 定义变量，保存到后继
    var successor = delNode
    var current = delNode.right
    var successorParent = delNode
    while (current != null) {
      successorParent = successor
      successor = current
      current = current.left
    }
    // 判断寻找到的后继节点是否直接就是delNode的right节点
    if (successor != delNode.right) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }
    return successor
  }
}
// 测试
var bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
console.log(bst)
// 测试先序遍历
var resultString = ''
// bst.preOrderTraversal(function(key) {
//   resultString += key + ' '
// })
// console.log(resultString)
// //测试中序遍历
// resultString = ''
// bst.midOrderTraversal(function(key) {
//   resultString += key + ' '
// })
// console.log(resultString)
// // 测试后序遍历
// resultString = ''
// bst.postOrderTravelsal(function(key) {
//   resultString += key + ' '
// })
// console.log(resultString)
// console.log(bst.max())
// console.log(bst.min())
// console.log(bst.search(25))
// console.log(bst.search(24))
// console.log(bst.search(2))
// 测试删除
bst.remove(9)
bst.remove(7)
bst.remove(15)
resultString = ''
bst.postOrderTravelsal(function(key) {
  resultString += key + ' '
})
console.log(resultString)