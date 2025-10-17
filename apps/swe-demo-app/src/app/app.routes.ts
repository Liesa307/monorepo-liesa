import { Route } from '@angular/router';
import { Home, LegoSetOverview } from '@monorepo-liesa/swe-demo-app-feature';

export const appRoutes: Route[] = [
{path: "", component: Home},
{path: "products", component: LegoSetOverview},
{path: "account", component: Home},


];
