import { Component, OnInit } from '@angular/core';
import { ToggleSidenavService } from '../sidenav/toggle-sidenav/toggle-sidenav.service';
import { TasksService } from '../../../services/tasks-service/tasks.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private sidenavSrv: ToggleSidenavService) {}

  ngOnInit() {
  }

  toggleSidenav(): void {
    this.sidenavSrv.toggleSidenav();
  }

}
