import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = Array.from({ length: 10 }, (x, i) => ({ id: i, text: `Task placeholder ${i}` }));
  constructor() { }

  getTasks() {
    return this.tasks;
  }
}
