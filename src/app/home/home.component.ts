import { Component } from '@angular/core';
import { AnimatedBackgroundComponent } from "../animated-background/animated-background.component";
import { MediaCaptionCardListComponent } from "./content/lists/media-caption-card-list/media-caption-card-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnimatedBackgroundComponent, MediaCaptionCardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
