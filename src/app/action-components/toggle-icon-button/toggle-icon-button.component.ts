import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-icon-button.component.html',
  styleUrl: './toggle-icon-button.component.css'
})
export class ToggleIconButtonComponent {
  @Input() iconOne : string|null = null;
  @Input() iconTwo : string|null = null;
  @Input() toggled : boolean = false;
  @Input() shape : string = "circle" //Adjusts border radius, Supports 'circle', 'square-rounded'
  //Emits "selected" value
  @Output() changeEvent = new EventEmitter<boolean>();
  defaultIconOne = "bi-check"
  defaultIconTwo = "bi-x";

  ngOnInit()
  {
    if(!this.iconOne)
    {
      this.iconOne = this.defaultIconOne;
    }

    if(!this.iconTwo)
    {
      this.iconTwo = this.defaultIconTwo;
    }
  }


  toggleSelector(e: any)
  {
    this.toggled = !this.toggled
    console.log(this.toggled)
    this.changeEvent.emit(this.toggled);
  }
}
