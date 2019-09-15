class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Display initial todos
    this.onTodoListChanged(this.model.todos);

    // Explicit this binding
    this.model.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);
  }

  onTodoListChanged = todos => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = todoText => {
    this.model.addTodo(todoText);
  };

  handleEditTodo = (id, todoText) => {
    this.model.editTodo(id, todoText);
  };

  handleDeleteTodo = id => {
    this.model.deleteTodo(id);
  };

  handleToggleTodo = id => {
    this.model.toggleTodo(id);
  };
}

export { Controller };
