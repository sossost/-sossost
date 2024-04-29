const getTodoCount = (todos) => {
  const notCompelted = todos.filter((todo) => !todo.completed);

  const { length } = notCompelted;
  if (length === 1) {
    return "1 Item left";
  }

  return `${length} Items left`;
};

export default (targetElement, { todos }) => {
  const newCounter = targetElement.cloneNode(true);
  newCounter.textContent = getTodoCount(todos);
  return newCounter;
};
