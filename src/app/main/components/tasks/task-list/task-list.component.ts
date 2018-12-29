import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../../../services/tasks-service/tasks.service';
import { Task } from '../../../task';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatCheckboxChange, MatSnackBar } from '@angular/material';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  tasks: Task[] = this.taskSrv.tasks;
  selectedTask: Task;
  tasksSubscr: Subscription;
  tasksLeft: Subscription;
  taskToEdit: FormControl = new FormControl('');

  constructor(
    private taskSrv: TasksService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.tasksSubscr = this.taskSrv.tasksUpdated$.subscribe(tasks => this.tasks = tasks);
    this.tasksLeft = this.taskSrv.tasksLeft$.subscribe(tasks => {
      if (tasks === 0) {
        setTimeout(() => this.openSnackBar(), 400);
        setTimeout(() => this.taskSrv.refreshTasks(), 1400);
      }
    });
  }

  trackByTasks(index: number, task: Task): number { return task.id; }

  checkTask(ev: MatCheckboxChange, task: Task): void {
    this.taskSrv.checkTask(ev.checked, task);
  }

  editTask(task: Task): void {
    this.taskSrv.updateTask('text', this.taskToEdit.value, task);
    this.selectedTask = null;
  }

  selectTask(task: Task): void {
    this.selectedTask = task;
    this.taskToEdit.setValue(this.selectedTask.text);
  }

  openSnackBar() {
    this.snackBar.open('All tasks are done!', '', { duration: 1500 });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    this.taskSrv.onDrop(this.tasks);
  }

  getColor(task): string {
    return task.checked ? '#333232' : '#424242';
  }

  getClass(task) {
    return { 'tasks-list__text_line-through': task.checked };
  }

  ngOnDestroy() {
    this.tasksSubscr.unsubscribe();
    this.tasksLeft.unsubscribe();
  }

}
