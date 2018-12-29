import { Injectable } from '@angular/core';
import { Task } from '../../task';
import { Subject } from 'rxjs';
import { StorageService } from '../storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasksLeftSource = new Subject<number>();
  private tasksUpdatedSource = new Subject<Task[]>();
  tasksLeft$ = this.tasksLeftSource.asObservable();
  tasksUpdated$ = this.tasksUpdatedSource.asObservable();
  tasks: Task[] = this.storageSrv.getTasks();
  tasksLeft: number = this.getLeftTasksNum();

  constructor(private storageSrv: StorageService) { }

  private getLeftTasksNum(): number {
    return this.tasks.filter(task => !task.checked).length;
  }

  private initTask(text: string): Task {
    return {
      id: this.tasks.length,
      text: text,
      checked: false
    };
  }

  private updateTasks(): void {
    this.tasksUpdatedSource.next(this.tasks);
    this.storageSrv.setTasks(this.tasks);
  }

  updateTask(key: string, value: boolean | string, task: Task): void {
    this.tasks = this.tasks.map(i => i.id === task.id ? { ...task, [key]: value } : i);
    this.updateTasks();
  }

  checkTask(checked: boolean, task: Task) {
    this.updateTask('checked', checked, task);
    this.tasksLeft = checked ? this.tasksLeft - 1 : this.tasksLeft + 1;
    this.tasksLeftSource.next(this.tasksLeft);
  }

  addTask(taskText: string): void {
    this.tasks = [this.initTask(taskText), ...this.tasks];
    this.updateTasks();
    this.tasksLeftSource.next(++this.tasksLeft);
  }

  onDrop(tasks: Task[]): void {
    this.tasks = [...tasks];
    this.storageSrv.setTasks(this.tasks);
  }

  refreshTasks(): void {
    this.tasks = this.tasks.map(task => ({ ...task, checked: false }));
    this.updateTasks();
    this.tasksLeft = this.getLeftTasksNum();
    this.tasksLeftSource.next(this.tasksLeft);
  }

}
