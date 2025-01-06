import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-text-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-text-button.component.html',
  styleUrl: './toggle-text-button.component.css'
})
export class ToggleTextButtonComponent {
  @Input() textOne! : string;
  @Input() textTwo! : string;
  @Input() toggled : boolean = false;
  @Input() shape : string = "circle" //Adjusts border radius, Supports 'circle', 'square-rounded'
  @Output() changeEvent = new EventEmitter<boolean>();


  toggleSelector(e: any)
  {
    this.toggled = !this.toggled
    console.log(this.toggled)
    this.changeEvent.emit(this.toggled);
  }
}
