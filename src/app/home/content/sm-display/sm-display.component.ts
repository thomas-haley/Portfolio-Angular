import { Component, Input } from '@angular/core';
import { GlassCardComponent } from "../glass-card/glass-card.component";

@Component({
  selector: 'app-sm-display',
  standalone: true,
  imports: [GlassCardComponent],
  templateUrl: './sm-display.component.html',
  styleUrl: './sm-display.component.css'
})
export class SmDisplayComponent {
  @Input() bsSocialIcon: string = "github";
  @Input() socialLink!: string;
  @Input() includeDescription: boolean = false;
  @Input() iconFont: number = 100;
  @Input() containerPadding: number = 30;
}
