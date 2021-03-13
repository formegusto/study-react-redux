import { TodoActions, TODO_INSERT_ACTION } from "./actions";
import { todoStore, TodoStore } from "./store";
import { TodoItem, TODO_DELETE, TODO_INSERT, TODO_UPDATE } from "./types";

export default function TodoReducer(state: TodoStore = todoStore, action: TodoActions): TodoStore {
    switch(action.type) {
        case TODO_INSERT :
            const todos: TodoItem[] = state.todos;
            todos.push((action as TODO_INSERT_ACTION).payload);
            return {
                ...state,
                todos: todos
            };
        case TODO_DELETE :
            return {
                ...state,
                todos: state.todos.filter((todo, idx) => idx !== (action.payload as number))
            };
        case TODO_UPDATE :
            return state;
        default:
            return state;
    }
}