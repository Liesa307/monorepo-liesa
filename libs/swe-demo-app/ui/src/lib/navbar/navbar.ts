//navbar.ts
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavItem } from "@monorepo-liesa/shared-domain";


@Component({
  selector: "lib-swe-demo-app-ui-navbar",
  imports: [RouterModule],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  @Input() items: NavItem[] = [];
  @Input() showUser = false;
  @Output() navigate = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();
}
