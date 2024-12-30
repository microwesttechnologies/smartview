import { Routes } from '@angular/router';
import { ConfigurationComponent } from '../modules/configuration/configuration.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import(
        '../modules/dashboard/dashboard.component'
      ).then((c) => c.DashboardComponent),
    },
  {
    path: 'configuration',
    loadComponent: () =>
      import(
        '../modules/configuration/configuration.component'
      ).then((c) => c.ConfigurationComponent),
    },
      {
        path: 'persons',
        loadComponent: () =>
          import(
            '../modules/persons/persons.component'
          ).then((c) => c.PersonsComponent),
      },
   {
      path: 'zones',
      loadComponent: () =>
        import(
          '../modules/zones/zones.component'
        ).then((c) => c.ZonesComponent),
    },
   {
      path: 'dashboard',
      loadComponent: () =>
        import(
          '../modules/notifications/notifications.component'
        ).then((c) => c.NotificationsComponent),
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];