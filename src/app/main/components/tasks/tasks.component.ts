import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TasksService } from '../../services/tasks-service/tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {

  showInput = false;
  sidenavOpened = false;
  newTask = new FormControl('');
  sidenavState: Subscription;

  constructor(
    private taskSrv: TasksService,
  ) {}

  ngOnInit() {
  }

  onSubmit(): void {
    this.taskSrv.addTask(this.newTask.value);
    this.newTask.reset('');
  }

  ngOnDestroy(): void {
    this.sidenavState.unsubscribe();
  }

}
