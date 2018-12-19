import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../tasks-service/tasks.service';
import { Task } from '../task';
import { ToggleSidenavService } from '../layout/sidenav/toggle-sidenav/toggle-sidenav.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatCheckboxChange } from '@angular/material';

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
  taskToEdit: FormControl = new FormControl('');

  constructor(
    private taskSrv: TasksService,
    private sidenavSrv: ToggleSidenavService
  ) {}

  ngOnInit() {
    this.sidenavSubscr = this.sidenavSrv.sidenavToggled$.subscribe(() => this.sidenavOpened = !this.sidenavOpened);
    this.tasksSubscr = this.taskSrv.tasksUpdated$.subscribe(tasks => this.tasks = tasks);
  }

  trackByTasks(index: number, task: Task): number { return task.id; }

  onSubmit(): void {
    this.taskSrv.addTask(this.newTask.value);
    this.newTask.reset('');
  }

  checkTask(ev: MatCheckboxChange, task: Task): void {
    this.taskSrv.updateTask('checked', ev.checked, task);
  }

  editTask(task: Task): void {
    this.taskSrv.updateTask('text', this.taskToEdit.value, task);
    this.selectedTask = null;
  }

  selectTask(task: Task): void {
    this.selectedTask = task;
    this.taskToEdit.setValue(this.selectedTask.text);
  }

  ngOnDestroy() {
    this.sidenavSubscr.unsubscribe();
    this.tasksSubscr.unsubscribe();
  }

}
