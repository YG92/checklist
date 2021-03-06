import { NgModule } from '@angular/core';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { ManageListsComponent } from './components/manage-lists/manage-lists.component';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './components/page-layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskToolbarComponent } from './components/tasks/toolbar/task-toolbar.component';
import { ToolbarComponent } from './components/page-layout/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    TaskListComponent,
    CalendarViewComponent,
    ManageListsComponent,
    ToolbarComponent,
    TaskToolbarComponent,
    TasksComponent,
  ]

})
export class MainModule {

}
