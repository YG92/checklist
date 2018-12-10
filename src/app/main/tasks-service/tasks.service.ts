import { Injectable } from '@angular/core';
import { Task } from '../task';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksUpdatedSource = new Subject<Task[]>();
  tasksUpdated$ = this.tasksUpdatedSource.asObservable();
  tasks: Task[] = this.getTasks();
  constructor() { }

  private getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  private setTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  private initTask(val): Task {
    return { id: this.tasks.length, text: val, checked: false };
  }

  private updateTasks(): void {
    this.tasksUpdatedSource.next(this.tasks);
    this.setTasks();
  }

  addTask(taskText): void {
    this.tasks = [this.initTask(taskText), ...this.tasks];
    this.updateTasks();
  }

  updateTaskStatus(task): void {
    this.tasks = this.tasks.map(i => i.id === task.id ? task : i);
    this.updateTasks();
  }

}
