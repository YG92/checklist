import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { ManageListsComponent } from './manage-lists/manage-lists.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: LayoutComponent,
    children: [
      { path: '', component: TaskListComponent },
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
