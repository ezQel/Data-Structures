class Node{
    constructor(name){
        this.next = null;
        this.previous = null;
        this.data = name;
    }
}

class LinkedList{
    constructor(){
        this.head = new Node("head");
    }
    
    insert(item){ // inserts a new item to the end of the linked list
        let newNode = new Node(item);
        let curr = this.head;

        while(curr.next != null){
            curr = curr.next;
        }

        newNode.next = null;
        newNode.previous = curr;
        curr.next = newNode;  
    }
}

let llist =  new LinkedList();
llist.insert('Mombasa');
llist.insert('Nairobi');
llist.insert('Kisumu');
console.log(llist);