interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
    clear(): void;
}

class Stack<T> implements IStack<T> {
    public storage: T[] = [];

    constructor(public capacity: number = Infinity) { }

    push(item: T): void {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.storage.length;
    }

    clear(): void {
        const fullSize = this.size();
        for (let i = 0; i < fullSize; i++) {
            this.storage.pop()
        }
    }
}

export default Stack;