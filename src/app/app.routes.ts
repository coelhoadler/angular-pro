import { Route } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const appRoutes: Route[] = [
    { 
        path: '',
        pathMatch: 'full',
        component: HelloWorldComponent,
    },
    {
        path: 'products',
        loadComponent: () => import('@angular-pro-class/products').then(c => c.ProductsComponent)
    },
    {
        path: 'orders',
        loadComponent: () => import('@angular-pro-class/orders').then(c => c.OrdersComponent)
    }
];
