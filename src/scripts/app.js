import { Model } from './model.js';
import { View } from './view.js';
import { Controller } from './controller.js';

const app = new Controller(new Model(), new View());

// app.model.addTodo('Learn JavaScript');
// app.model.editTodo(3, 'Learn JavaScript and React');
// app.model.deleteTodo(2);
// app.model.toggleTodo(1);

console.log(app.model.todos);
