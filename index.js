function LinkedList(){
  this.head = null;
}

LinkedList.prototype.isEmpty = function(){
  return this.head === null;
}

LinkedList.prototype.size = function(){
  let current = this.head;
  let count = 0;

  while(current !== null){
    count++;
    current = current.next;
  }
  return count;
}

//add number to beginning of list
//1, create a new node with a value
//2. make new node point to current head
// update this.head to point to the new node
LinkedList.prototype.prepend = function(val){
  let newNode = {
    data: val,
    next: this.head
  }
  this.head = newNode;
}

//adds node to end of list
//1 create new node using val;
//2 traverse to end of list 
//3 make last nodes next value point to new node 
LinkedList.prototype.append = function(val){
  let newNode = {
    data: val,
    next: null
  };

  if(this.isEmpty()){
    this.head = newNode;
    return;
  }

  let current = this.head;

  while(current.next !== null){
    current = current.next;
  }
  current.next = newNode;

}

/*

*/
LinkedList.prototype.remove = function(val){
  if(!this.contains(val)){
    return
  }

  if(this.head.data == val){
    this.head = this.head.next;
    return;
  }

  let pre = null;
  let curr = this.head;

  while(curr.data !== val){
    prev = curr;
    curr = curr.next;
  }

  prev.next = curr.next;
}

LinkedList.prototype.contains = function(val){
  let current = this.head;
  while(current !== null){
    if(current.data == val){
      return true
    }
    current = current.next
  }
  return false;
}

// output is [5,10,15,20]
LinkedList.prototype.print = function(){
  let output = [];
  let current = this.head;

  while(current !== null){
    output += current.data;
    if(current.next !== null){
      output += ',';
    }
    current = current.next;
  }

  console.log(output);
}

let n1 = new LinkedList();
n1.append(5)
n1.append(10)
n1.append(15)
n1.append(20)
n1.append(25)
n1.prepend(50)
console.log(n1.print())
console.log(n1.size())
console.log(n1.isEmpty())