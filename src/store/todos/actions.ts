import { TodoItem, TODO_DELETE, TODO_INSERT, TODO_UPDATE } from "./types";

export const todoActions = {
    insert: (todo: TodoItem) => ({type: TODO_INSERT, payload: todo}),
    delete: (idx: number) => ({type: TODO_DELETE, payload: idx}),
    update: (idx: number) => ({type: TODO_UPDATE, payload: idx}),
}

export type TODO_INSERT_ACTION = ReturnType<typeof todoActions.insert>;
export type TODO_DELETE_ACTION = ReturnType<typeof todoActions.delete>;
export type TODO_UPDATE_ACTION = ReturnType<typeof todoActions.update>;


export type TodoActions = TODO_INSERT_ACTION | TODO_DELETE_ACTION | TODO_UPDATE_ACTION;