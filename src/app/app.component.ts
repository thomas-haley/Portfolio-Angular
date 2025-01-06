import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { LightDarkSelectorComponent } from "./nav/light-dark-selector/light-dark-selector.component";
// import { NavCollapseComponent } from "./nav/nav-collapse/nav-collapse.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    LightDarkSelectorComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Thomas Haley - Full Stack Software Development';



}
