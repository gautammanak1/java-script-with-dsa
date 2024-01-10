// Implement a binary tree and perform an in order traversal

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  inOrderTraversal(node = this.root) {
    if (node === null) return [];
    return [
      ...this.inOrderTraversal(node.left),
      node.value,
      ...this.inOrderTraversal(node.right),
    ];
  }
}

//Lets Check
let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

console.log(tree.inOrderTraversal());
