type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        // set the node as head if stack is empty
        if (!this.head) {
            this.head = node;
            return;
        }

        // set node's previous to be the head
        node.prev = this.head;
        // set the new node as the new head
        this.head = node;
    }

    pop(): T | undefined {
        // set the length of the stack as 0 or the previous length - 1,
        // whichever is higher in the two
        this.length = Math.max(0, this.length - 1);

        // set head as undefined if its the only node in the stack
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as Node<T>;
        // make previous node as the new head
        this.head = head.prev;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
