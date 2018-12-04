export const allTodos = state => {
  let todoKeys = Object.keys(state.todos)
  return todoKeys.reduce((acc, key) => {
    return [...acc, state.todos[key]]; 
  }, 
  [])
};

