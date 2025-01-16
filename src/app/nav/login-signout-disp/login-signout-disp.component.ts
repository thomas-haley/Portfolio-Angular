import { Component, inject } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { LoginFormComponent } from "../../forms/login-form/login-form.component";

@Component({
  selector: 'app-login-signout-disp',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login-signout-disp.component.html',
  styleUrl: './login-signout-disp.component.css'
})
export class LoginSignoutDispComponent {
  accountService = inject(AccountService);

}
