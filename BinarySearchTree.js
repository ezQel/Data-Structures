class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.head = null;
    }
    
    insert(value){
        let node = new Node(value);
        let curr = this.head;

        if (this.head == null) {
            this.head = node;
        }
        else {
            while(true) {
                if (value > curr.value) {
                    if (curr.right == null) {
                        curr.right = node;
                        break;
                    }
                    else {
                        curr = curr.right;
                    }
                }
                else {
                    if (curr.left == null) {
                        curr.left = node;
                        break;
                    }
                    else {
                        curr = curr.left;
                    }
                    
                }
                
            }
        }
    }


}

let tree = new BST();
tree.insert(20);
tree.insert(0);
tree.insert(4);
tree.insert(74);
console.log(tree);