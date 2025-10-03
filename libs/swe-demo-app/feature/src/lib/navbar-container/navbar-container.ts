//navbar-container.ts
import { Component, computed, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { Navbar } from "@monorepo-liesa/swe-demo-app-ui";
import { NavItem } from "@monorepo-liesa/shared-domain";

@Component({
  selector: "lib-swe-demo-app-feature-navbar-container",
  imports: [Navbar, RouterModule],
  templateUrl: "./navbar-container.html",
  styleUrl: "./navbar-container.css",
})
export class NavbarContainer {
  private router = inject(Router);

    readonly items = computed<NavItem[]>(() => ([
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Account', path: '/account' },
  ]));

  onLogout() {
    console.log("TODO: logging out logic");
  }

  onNavigate(path: string) {
    console.log("navigation triggered to " + path);
    //this.router.navigate([path]);
  }
}
