import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { ManageListsComponent } from './manage-lists/manage-lists.component';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    LayoutComponent,
    TaskListComponent,
    CalendarViewComponent,
    ManageListsComponent
  ]
})
export class MainModule {

}
