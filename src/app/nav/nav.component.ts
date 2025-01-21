import { Component } from '@angular/core';
import { NavLinkComponent } from "./nav-link/nav-link.component";
import { LoginSignoutDispComponent } from "./login-signout-disp/login-signout-disp.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavLinkComponent, LoginSignoutDispComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


  toggleTheme(){
    
  }
}
