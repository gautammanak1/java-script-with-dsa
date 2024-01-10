// Reverse a linked list
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
}

// Lets Check.
let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);

list.head = reverseLinkedList(list.head);
