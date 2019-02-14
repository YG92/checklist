import { Injectable } from '@angular/core';
import { Task } from '../../task';
import { fixtureTasks } from '../../fixture';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    StorageService.initTasks();
  }

  static getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks'));
  }

  static setTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static initTasks(): void {
    const tasks = StorageService.getTasks();
    if (!tasks) {
      StorageService.setTasks(fixtureTasks);
    }
  }

}
