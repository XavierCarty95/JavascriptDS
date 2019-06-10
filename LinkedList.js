function LinkedList(){
  this.head = null;
  this.tail = null;
}


function Node(value, next, prev){
  this.value = value;
  this.next = next; 
  this.prev = prev; 

}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode; 
  this.head = newNode; 
}

LinkedList.prototype.addToTail = function(value)
{
  var newNode = new Node(value,null,this.tail)
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode; 
  this.tail = newNode;
}

var myLL = new LinkedList();


LinkedList.prototype.removeHead = function() {
 if(!this.head) return null; 
 var val = this.head.value; 
 this.head = this.head.next;
 if(this.head) this.head.prev = null;
 else this.tail = null; 
 return val;


}

var ll = new LinkedList()

ll.addToHead(1000);
ll.addToHead(2000);
ll.addToTail(3000);


LinkedList.prototype.removeTail = function(){
  if(!this.tail) return null; 
  var val = this.tail.value; 
  this.tail = this.tail.prev
  if(this.tail) this.tail.next = null; 
  else this.head = null 
  return val; 
}

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  
  while(currentNode){
   if(currentNode.value === searchValue) return currentNode.value
     currentNode  = currentNode.next; 
 

      

  }
  return null; 


};

LinkedList.prototype.indexOf = function(value) {
  var index = []
  var currentIndex = 0; 
  var currentNode = this.head;
  while(currentNode) {
    if(currentNode.value === value){
      index.push(currentIndex)
    }
    currentNode = currentNode.next; 
    currentIndex++


  }
  return index;

}


var myLL = new LinkedList();
myLL.addToTail(1);
myLL.addToTail(5);
myLL.addToTail(3);
myLL.addToTail(5);
myLL.addToTail(8);
myLL.addToTail(7);
myLL.addToTail(5);

console.log(myLL.indexOf(5));


