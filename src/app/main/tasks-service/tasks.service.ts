import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = this.getTasks();
  constructor() { }

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  setTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  initTask(val): Task {
    return { id: this.tasks.length, text: val, checked: false };
  }

  addTask(taskText): void {
    this.tasks = [this.initTask(taskText), ...this.tasks];
    this.setTasks();
  }

  updateTasks(task): void {
    this.tasks = this.tasks.map(i => i.id === task.id ? task : i);
    this.setTasks();
  }
}
