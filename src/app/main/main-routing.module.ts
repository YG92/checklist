import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { ManageListsComponent } from './components/manage-lists/manage-lists.component';
import { LayoutComponent } from './components/page-layout/layout.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: LayoutComponent,
    children: [
      { path: '', component: TasksComponent },
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
