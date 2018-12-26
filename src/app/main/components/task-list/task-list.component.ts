import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks-service/tasks.service';
import { Task } from '../../task';
import { ToggleSidenavService } from '../page-layout/sidenav/toggle-sidenav/toggle-sidenav.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatCheckboxChange, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  tasks: Task[] = this.taskSrv.tasks;
  selectedTask: Task;
  sidenavOpened = false;
  newTask = new FormControl('');
  sidenavSubscr: Subscription;
  tasksSubscr: Subscription;
  tasksLeft: Subscription;
  taskToEdit: FormControl = new FormControl('');
  showInput = false;

  constructor(
    private taskSrv: TasksService,
    private sidenavSrv: ToggleSidenavService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.sidenavSubscr = this.sidenavSrv.sidenavToggled$.subscribe(() => this.sidenavOpened = !this.sidenavOpened);
    this.tasksSubscr = this.taskSrv.tasksUpdated$.subscribe(tasks => this.tasks = tasks);
    this.tasksLeft = this.taskSrv.tasksLeft$.subscribe(tasks => {
      if (tasks === 0) {
        setTimeout(() => this.openSnackBar(), 400);
        setTimeout(() => this.refreshTasks(), 1400);
      }
    });
  }

  trackByTasks(index: number, task: Task): number { return task.id; }

  onSubmit(): void {
    this.taskSrv.addTask(this.newTask.value);
    this.newTask.reset('');
    this.showInput = false;
  }

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

  refreshTasks(): void {
    this.taskSrv.refreshTasks();
  }

  openSnackBar() {
    this.snackBar.open('All tasks are done!', '', { duration: 2000 });
  }

  ngOnDestroy() {
    this.sidenavSubscr.unsubscribe();
    this.tasksSubscr.unsubscribe();
    this.tasksLeft.unsubscribe();
  }

}
