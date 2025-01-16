import { Component, inject, Input } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  accountService = inject(AccountService)
  private router = inject(Router);
  
  model: any = {};
  login(){
    console.log(this.model)
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log("success!!")
        // this.router.navigateByUrl("dash");
      },
      error: error => console.error(error)
    })
  }
}
