import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { ManageListsComponent } from './manage-lists/manage-lists.component';

const routes: Routes = [
  {
    path: 'main',
    component: LayoutComponent,
    children: [
      { path: 'task-list', component: TaskListComponent },
      { path: 'calendar-view', component: CalendarViewComponent },
      { path: 'manage-lists', component: ManageListsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
