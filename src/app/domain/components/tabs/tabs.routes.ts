import { Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'conversor-to-pdf',
        loadComponent: () =>
          import('../conversor-to-pdf/conversor-to-pdf.component').then(
            (c) => c.ConversorToPdfComponent,
          ),
      },
      {
        path: '',
        redirectTo: 'conversor-to-pdf',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/conversor-to-pdf',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/tabs/conversor-to-pdf',
    pathMatch: 'full',
  },
];
