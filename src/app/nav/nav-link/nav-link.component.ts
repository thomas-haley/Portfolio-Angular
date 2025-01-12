import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.css'
})
export class NavLinkComponent {
  @Input() linkURL!: string;
  @Input() linkText!: string;

  constructor(private router: Router) {}

  activeRoute(): boolean
  {
    return this.router.url == this.linkURL;
  }
}
