import { Component } from '@angular/core';
import { AnimatedBackgroundComponent } from "../../animated-background/animated-background.component";

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [AnimatedBackgroundComponent],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent {

}
