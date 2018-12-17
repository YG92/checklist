import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../tasks-service/tasks.service';
import { Task } from '../task';
import { ToggleSidenavService } from '../layout/sidenav/toggle-sidenav/toggle-sidenav.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  tasks: Task[] = this.taskSrv.tasks;
  sidenavOpened = false;
  newTask = new FormControl('');
  sidenavSubscr: Subscription;
  tasksSubscr: Subscription;

  constructor(
    private taskSrv: TasksService,
    private sidenavSrv: ToggleSidenavService
  ) {}

  ngOnInit() {
    this.sidenavSubscr = this.sidenavSrv.sidenavToggled$.subscribe(() => this.sidenavOpened = !this.sidenavOpened);
    this.tasksSubscr = this.taskSrv.tasksUpdated$.subscribe(tasks => this.tasks = tasks);
  }

  onSubmit(): void {
    this.taskSrv.addTask(this.newTask.value);
    this.newTask.reset('');
  }

  onCheck(ev, task): void {
    task.checked = ev.checked;
    this.taskSrv.updateTaskStatus(task);
  }

  ngOnDestroy() {
    this.sidenavSubscr.unsubscribe();
    this.tasksSubscr.unsubscribe();
  }

}
