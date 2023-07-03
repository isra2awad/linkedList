import Node from "./node.js";
// in the linkedlist class we start by telling the constructor to be ready to create the head node for us using the Node we class that we imported
export default class LinkedList {
  constructor() {
    this.listHead = null;
  }

  //prepend adds element to the beginning of the list
  //prepend method firstly it looks for the compass temp by checking if we have a head or not.
  //we have a method that first creates a pointer to the current node and default to null untill we check first if we have the head node or not. if we have a head then we found our compass then assign temp to this.listhead
  // if not then we are creating the first element which the head to use it later as a comapss temp nextNode. we create it using the class node and assign temp which is now pointing at the head node we created to its nodenet
  // because simply we don't have any other elements yet
  // temp is the current node through which we check nextNode proprety which has the link to the next node when we start navigating a linked list we start with temp = this.listhead so first start looking at head = temp then we go check its nextNode temp.nextNode and assign it to temp so now temp is the second node and etc..
  prepend(value) {
    let temp = null;
    if (this.listHead != null) temp = this.listHead;
    // if i have the head node already then my current pointer temp would point at it
    this.listHead = new Node(value);
    // in case we have a head temp = this.listHead  which is the previous head
    // in case we don't have a head then temp is still null
    this.listHead.nextNode = temp;
  }

  //append creates a node and add it to the end of the list. first it checks if there is a head or not if not it recalls the method prepend to create the head for us
  //
  append(value) {
    if (this.listHead == null) this.prepend(value);
    else {
      //now i have the head
      let temp = this.listHead;
      //then loop untill we reach the last node
      while (temp.nextNode != null) temp = temp.nextNode;
      temp.nextNode = new Node(value);
    }
  }

  size() {
    let temp = this.listHead;
    let counter = 0;
    while (temp != null) {
      counter++;
      temp = temp.nextNode;
    }
    return counter;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let temp = this.listHead;
    while (temp.nextNode != null) temp = temp.nextNode;

    return temp;
  }

  at(index) {
    let temp = this.listHead;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
      if (temp == null) return "node is not found";
    }
    return temp;
  }
  pop() {
    let cur = this.listHead;
    let prev = null;
    while (cur.nextNode != null) {
      prev = cur;
      cur = cur.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    let temp = this.listHead;
    while (temp != null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    let temp = this.listHead;
    let index = 0;
    while (temp != null) {
      if (temp.value === value) return index;
      temp = temp.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let temp = this.listHead;
    let string = "";
    while (temp != null) {
      string += `(${temp.value}) -> `;
      temp = temp.nextNode;
    }
    string += null;
    return string;
  }

  insertAt(value, index) {
    if (this.listHead == null) this.prepend(value);
    else {
      let cur = this.listHead;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = cur;
        cur = cur.nextNode;
        if (cur == null) break; // if index is bigger than end of list, add node at end of list
      }
      const tmp = new Node(value);
      prev.nextNode = tmp;
      tmp.nextNode = cur; // cur is the next node
    }
  }

  removeAt(index) {
    let length = this.size();
    if (index < 0) return "Please provide an index that is not less than 0";
    if (index > length) return "the provided index is out of range";
    if (this.listHead == null) {
      return "List is already empty";
    }
    if (index === 0) {
      this.listHead = this.listHead.nextNode;
      return; // Exit the method after updating the head
    }
    let cur = this.listHead;
    let prev = null;

    let count = 0;

    while (cur != null && count < index) {
      prev = cur;
      cur = cur.nextNode;
      count++;
    }
    if (cur == null) {
      return "There is no item for this index";
    }
    prev.nextNode = cur.nextNode;
  }
}
