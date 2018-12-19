import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  setTasks(tasks): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

}
