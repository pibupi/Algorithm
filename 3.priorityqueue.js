// 优先级队列
function PriorityQueue(){
  // 在PriorityQueue中重新创建了一个类，可以理解为内部类
  function QueueElement(element,priority){
    this.element = element
    this.priority = priority
  }
  // 封装属性
  this.items = []
  // 实现插入方法
  PriorityQueue.prototype.enqueue = function(element,priority){
    // 创建QueueElement对象
    var queueElement = new QueueElement(element,priority)
  }
}
var pq = new PriorityQueue()