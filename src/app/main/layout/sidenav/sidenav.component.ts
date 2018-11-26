import { Component, OnInit, ViewChild } from '@angular/core';
import { ToggleSidenavService } from './toggle-sidenav/toggle-sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer') drawer: any;

  constructor(private sidenavSrv: ToggleSidenavService) {}

  ngOnInit() {
    this.sidenavSrv.sidenavToggled$.subscribe(event => this.drawer.toggle());
  }

}
