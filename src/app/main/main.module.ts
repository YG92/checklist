import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { ManageListsComponent } from './manage-lists/manage-lists.component';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ],
  declarations: [
    LayoutComponent,
    TaskListComponent,
    CalendarViewComponent,
    ManageListsComponent,
    SidenavComponent,
    ToolbarComponent,
    FooterComponent
  ]

})
export class MainModule {

}
