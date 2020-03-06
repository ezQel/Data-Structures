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

    remove(item){
        let curr = this.head;
        while(curr.next != null){
            if( curr.data == item){
                curr.next.previous = curr.previous;
                curr.previous.next = curr.next;

                return true;
            }
            curr = curr.next;
        }

        return false;
    }

}

let llist =  new LinkedList();
llist.insert('Mombasa');
llist.insert('Nairobi');
llist.insert('Kisumu');
llist.remove('Mombasa'); //this line removes mombasa and puts nairobi in its place
console.log(llist.head.next.next.data);