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

    insertBefore(item, before){ // inserts a node before a given item

    }

    insertAfter(item, after){ // inserts a node after a given item

    }

    remove(item){ // removes a node with the givrn item from the linked list
        let curr = this.head;
        while(curr != null){
            if( curr.data == item){
                curr.next.previous = curr.previous;
                curr.previous.next = curr.next;

                return true;
            }
            curr = curr.next;
        }

        return false;
    }

    find(item){ // returns a node containing the item or null if the item is not found
        let curr = this.head;

        while(curr != null){
            if(curr.data == item){
                break;
            }
            curr = curr.next;
        }

        return curr;
    }

}

let llist =  new LinkedList();
llist.insert('Mombasa');
llist.insert('Nairobi');
llist.insert('Kisumu');
llist.remove('Mombasa'); //this line removes mombasa and puts nairobi in its place
console.log(llist.find('Mombasa'));
console.log(llist.find('Kisumu').data);
