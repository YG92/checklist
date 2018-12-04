import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks-service/tasks.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskSrv: TasksService) {}

  ngOnInit() {
    this.tasks = this.taskSrv.getTasks();
  }

}
