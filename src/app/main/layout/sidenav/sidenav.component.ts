import { Component, OnInit, ViewChild } from '@angular/core';
import { ToggleSidenavService } from './toggle-sidenav/toggle-sidenav.service';

interface Item {
  name: string;
  path: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer') drawer: any;
  items: Item[] = [
    { name: 'task list', path: ''},
    { name: 'calendar view', path: 'calendar-view'},
    { name: 'manage lists', path: 'manage-lists' }
  ];

  constructor(private sidenavSrv: ToggleSidenavService) {}

  ngOnInit() {
    this.sidenavSrv.sidenavToggled$.subscribe(() => this.drawer.toggle());
  }

}
