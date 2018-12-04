import { RECEIVE_TODOS } from "../actions/todo_actions.js"; 
import { RECEIVE_TODO } from "../actions/todo_actions.js"; 

const initialState = {
  1: {
    id: 1,
    title: 'Anthony\'s Dirtry Work',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'PARTY',
    body: 'with shampoo',
    done: true
  },
};


 const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos.reduce((acc, todo) => {
        acc[todo.id] = todo;
        return acc;
      },
      {});
    case RECEIVE_TODO:
      const newState = Object.assign({}, state);
      newState[action.todo.id] = action.todo; 
      return newState; 
    default: 
      return state; 
  }
}; 


export default todosReducer;