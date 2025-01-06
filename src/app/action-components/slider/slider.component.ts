import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})

export class SliderComponent {
  @Input() selected = false;

  //Emits "selected" value
  @Output() changeEvent = new EventEmitter<boolean>();
  


  toggleSelector(e: any)
  {
    this.selected = !this.selected
    e.target.querySelector(".slider-selector").classList.toggle("selected");
    this.changeEvent.emit(this.selected);
  }
}
