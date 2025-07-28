import { TodoItem } from './todoItem';
export class TodoList {

    constructor(public user: string, public items: TodoItem[]) {
        // no statements are required here
    }

    addItem(task: string) {
        this.items.push(new TodoItem(task));
    }

    getItems(): readonly TodoItem[]{
        return this.items;
    }
}