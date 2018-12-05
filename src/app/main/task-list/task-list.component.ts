import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks-service/tasks.service';
import { Task } from '../task';
import { ToggleSidenavService } from '../layout/sidenav/toggle-sidenav/toggle-sidenav.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  sidenavOpened = false;

  constructor(
    private taskSrv: TasksService,
    private sidenavSrv: ToggleSidenavService
  ) {}

  ngOnInit() {
    this.sidenavSrv.sidenavToggled$.subscribe(() => this.sidenavOpened = !this.sidenavOpened);
    this.tasks = this.taskSrv.getTasks();
  }

}
