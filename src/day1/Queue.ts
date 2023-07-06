import { walkForTsConfig } from "tsconfig-paths/lib/tsconfig-loader";

type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number = 0;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const node: Node<T> = { value: item };

        this.length++;

        // if there's no tail, 
        // set the new node as both the head and tail
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        // point the tail to the node
        this.tail.next = node;
        // make the node your new tail
        this.tail = node
    }

    deque(): T | undefined {
        if (!this.head) return undefined;

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        // if there are no nodes in the list,
        // set the tail to undefined as well
        if(this.length === 0) {
            this.tail = undefined;
        }

        // garbage collectio
        head.next = undefined;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
