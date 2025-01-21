import { Component } from '@angular/core';
import { AnimatedBackgroundComponent } from "../animated-background/animated-background.component";
import { MediaCaptionCardListComponent } from "./content/lists/media-caption-card-list/media-caption-card-list.component";
import {  ContactMeFormComponent } from "../forms/contact-me-form/contact-me-form.component";
import { LoginFormComponent } from "../forms/login-form/login-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnimatedBackgroundComponent, MediaCaptionCardListComponent, ContactMeFormComponent, LoginFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
