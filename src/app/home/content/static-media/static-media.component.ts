import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-static-media',
  standalone: true,
  imports: [],
  templateUrl: './static-media.component.html',
  styleUrl: './static-media.component.css'
})
export class StaticMediaComponent {
  @Input() mediaPath! : string;
}
