export type TodoItem = {
    content: string;
    isCheck: boolean;
}

export const TODO_INSERT = 'todo/INSERT';
export const TODO_UPDATE = 'todo/UPDATE';
export const TODO_DELETE = 'todo/DELETE';