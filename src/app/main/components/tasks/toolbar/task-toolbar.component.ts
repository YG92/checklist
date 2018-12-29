import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TasksService } from '../../../services/tasks-service/tasks.service';

@Component({
  selector: 'app-task-toolbar',
  templateUrl: './task-toolbar.component.html',
  styleUrls: ['./task-toolbar.component.scss']
})
export class TaskToolbarComponent implements OnInit {

  tasksNumber: number = this.taskSrv.tasksLeft;
  @Output() inputToggled = new EventEmitter();

  constructor(private taskSrv: TasksService) {}

  ngOnInit() {
    this.taskSrv.tasksLeft$.subscribe(num => this.tasksNumber = num);
  }

  refreshTasks(): void {
    this.taskSrv.refreshTasks();
  }

  toggleInput(): void {
    this.inputToggled.emit(null);
  }

}
