import { Injectable } from '@angular/core';
import { Task } from '../task';
import { Subject } from 'rxjs';
import { StorageService } from '../storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksUpdatedSource = new Subject<Task[]>();
  tasksUpdated$ = this.tasksUpdatedSource.asObservable();
  tasks: Task[] = this.storageSrv.getTasks();
  constructor(private storageSrv: StorageService) { }

  private initTask(text: string): Task {
    return { id: this.tasks.length, text: text, checked: false };
  }

  private updateTasks(): void {
    this.tasksUpdatedSource.next(this.tasks);
    this.storageSrv.setTasks(this.tasks);
  }

  updateTask(key: string, value: boolean | string, task: Task): void {
    this.tasks = this.tasks.map(i => {
      if (i.id === task.id) {
        return { ...task, [key]: value };
      }
      return i;
    });
    this.updateTasks();
  }

  addTask(taskText: string): void {
    this.tasks = [this.initTask(taskText), ...this.tasks];
    this.updateTasks();
  }

  refreshTasks(): void {
    this.tasks = this.tasks.map(task => {
      task = {...task, checked: false };
      return task;
    });
    this.updateTasks();
  }

}
