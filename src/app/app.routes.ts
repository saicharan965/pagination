import { Routes } from '@angular/router';
import { TaskOverviewComponent } from './task-overview/task-overview.component';

export const routes: Routes = [
  {
    path: '',
    component: TaskOverviewComponent
  },
  {
    path: 'create',
    loadComponent: () => import('./create-task/create-task.component').then(m => m.CreateTaskComponent)
  }
];
