import { NgModule } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { ManageListsComponent } from './components/manage-lists/manage-lists.component';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './components/page-layout/layout.component';
import { SidenavComponent } from './components/page-layout/sidenav/sidenav.component';
import { ToolbarComponent } from './components/page-layout/toolbar/toolbar.component';
import { FooterComponent } from './components/page-layout/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

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
    SidenavComponent,
    ToolbarComponent,
    FooterComponent
  ]

})
export class MainModule {

}
