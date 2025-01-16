import { Component } from '@angular/core';
import { LoginFormComponent } from "../../forms/login-form/login-form.component";
import { LoginSignoutDispComponent } from "../../nav/login-signout-disp/login-signout-disp.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [LoginFormComponent, LoginSignoutDispComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
