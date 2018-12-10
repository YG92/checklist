import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks-service/tasks.service';
import { Task } from '../task';
import { ToggleSidenavService } from '../layout/sidenav/toggle-sidenav/toggle-sidenav.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  sidenavOpened = false;
  newTask = new FormControl('');

  constructor(
    private taskSrv: TasksService,
    private sidenavSrv: ToggleSidenavService
  ) {}

  ngOnInit() {
    this.sidenavSrv.sidenavToggled$.subscribe(() => this.sidenavOpened = !this.sidenavOpened);
    this.updateTasks();
  }

  private updateTasks() {
    this.tasks = this.taskSrv.tasks;
  }

  onSubmit(): void {
    this.taskSrv.addTask(this.newTask.value);
    this.updateTasks();
    this.newTask.reset('');
  }

  onCheck(ev, task): void {
    task.checked = ev.checked;
    this.taskSrv.updateTasks(task);
  }

}
