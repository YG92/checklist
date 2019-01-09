import { Injectable } from '@angular/core';
import { Task } from '../../task';
import { fixtureTasks } from '../../fixture';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    this.initTasks();
  }

  initTasks(): void {
    const tasks = this.getTasks();
    if (!tasks) {
      this.setTasks(fixtureTasks);
    }
  }

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks'));
  }

  setTasks(tasks): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

}
