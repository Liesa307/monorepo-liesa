import { Route } from '@angular/router';
import { Home } from '@monorepo-liesa/swe-demo-app-feature';

export const appRoutes: Route[] = [
{path: "", component: Home},
{path: "products", component: Home},
{path: "account", component: Home}

];
