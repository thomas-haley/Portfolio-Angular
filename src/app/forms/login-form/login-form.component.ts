import { Component, inject, Input } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GlassCardComponent } from "../../home/content/glass-card/glass-card.component";
import { CustomToastrService } from '../../_services/custom-toastr.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, RouterLink, GlassCardComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  accountService = inject(AccountService)
  private router = inject(Router);
  toaster = inject(CustomToastrService);
  
  model: any = {};
  login(){
    let valid = this.validateLogin();
    if(valid)
    {
      this.accountService.login(this.model).subscribe({
        next: (user) => {
          this.toaster.showSuccess("Successfully logged in. Welcome back " + user.username + "!");
        },
        error: error => this.toaster.showError(error.error)
      })
    } else {
      this.toaster.showError("Invalid login attempt.");
    }
  }

  validateLogin(){
    if(this.model.username == undefined || this.model.username == '')
    {
      return false;
    }

    if(this.model.password == undefined || this.model.password == '')
      {
        return false;
      }

      return true;
  }
}
