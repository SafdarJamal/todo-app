import { Model } from './model.js';
import { View } from './view.js';
import { Controller } from './controller.js';

const app = new Controller(new Model(), new View());

app.model.addTodo('Learn HTMl');
console.log(app.model.todos);
