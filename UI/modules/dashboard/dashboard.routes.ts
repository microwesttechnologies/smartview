import { Routes } from '@angular/router';
import { ConfigurationComponent } from '../configuration/configuration.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard.component').then((c) => c.DashboardComponent),
    children: [
      // {
      //   path: 'monitory',
      //   loadComponent: () =>
      //     import('../components/monitory-modal/monitory-modal.component').then(
      //       (c) => c.MonitoryModalComponent
      //     ),
      // },
      // {
      //   path: 'notifications-history',
      //   loadComponent: () =>
      //     import(
      //       '../components/notifications-history-modal/notifications-history-modal.component'
      //     ).then((c) => c.NotificationsHistoryModalComponent),
      // },
      // {
      //   path: 'zones',
      //   loadComponent: () =>
      //     import('../components/zones-modal/zones-modal.component').then(
      //       (c) => c.ZonesModalComponent
      //     ),
      // },

    ],
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
