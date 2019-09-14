import { Model } from './model.js';
import { View } from './view.js';
import { Controller } from './controller.js';

const app = new Controller(new Model(), new View());
