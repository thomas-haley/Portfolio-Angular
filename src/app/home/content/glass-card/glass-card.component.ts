import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [],
  templateUrl: './glass-card.component.html',
  styleUrl: './glass-card.component.css'
})
export class GlassCardComponent {
  @Input() altBG: boolean = false;
  @Input() contentPadding: number = 2;
}
