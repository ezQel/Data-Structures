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
        return true;  
    }

    insertBefore(item, before){ // inserts an item before a given item
        let newNode = new Node(item);
        let curr = this.head;

        while(curr != null){
            if(curr.data == before){
                curr.previous.next = newNode;
                newNode.previous = curr.previous;
                curr.previous = newNode;
                newNode.next = curr;
                return true;
            }
            curr = curr.next;
        }

        return false;
    }

    insertAfter(item, after){ // inserts a node after a given item
        let newNode = new Node(item);
        let curr = this.head;

        while(curr != null){
            if (curr.data == after){
                newNode.previous = curr;
                newNode.next = curr.next;
                curr.next.previous = newNode;
                curr.next = newNode;
                return true
            }

            curr = curr.next;
        }

        return true;
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

    show(){ // prints out all the nodes of the linked list
        let curr = this.head;
        let prev;
        let nxt;
        let line = '';
        
        while(curr != null){
            prev = curr.previous;
            nxt = curr.next;

            // console.log(curr.data, 'previous:',
            //  (prev == null) ? null : prev.data,
            //   'next:', (nxt == null) ? null : nxt.data);
            // curr = curr.next;
            line += curr.data + ' -> ';
            curr = curr.next;
        }
        console.log(line);
        // console.log('-----------------------------------');
    }

}

let llist =  new LinkedList();
llist.insert('Mombasa');
llist.insert('Nairobi');
llist.insert('Kisumu');
llist.show();
llist.remove('Mombasa');
llist.show()