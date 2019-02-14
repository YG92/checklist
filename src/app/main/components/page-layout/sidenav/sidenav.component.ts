import { Component, OnInit, ViewChild } from '@angular/core';
import { ToggleSidenavService } from './toggle-sidenav/toggle-sidenav.service';
import { Item } from './sidenav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer') drawer: any;
  items: Item[] = [
    new Item('task list', ''),
    new Item('calendar view', 'calendar-view'),
    new Item('manage lists', 'manage-lists'),
  ];

  constructor(private sidenavSrv: ToggleSidenavService) {}

  ngOnInit() {
    this.sidenavSrv.sidenavToggled$.subscribe(() => this.drawer.toggle());
  }

}
