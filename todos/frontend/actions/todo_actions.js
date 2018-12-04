export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS, 
  todos: todos
}); 

window.receiveTodos = receiveTodos;

export const receiveTodo = todo => ({
  type: RECEIVE_TODO, 
  todo: todo 
}); 

window.receiveTodo = receiveTodo;

