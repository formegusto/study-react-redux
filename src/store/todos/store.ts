import { TodoItem } from "./types";

export type TodoStore = {
    todos: TodoItem[];
};

export const todoStore: TodoStore = {
    todos: [],
};
