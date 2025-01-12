import { Component, OnInit, signal } from '@angular/core';
import { SliderComponent } from "../../action-components/slider/slider.component";
import { ToggleIconButtonComponent } from "../../action-components/toggle-icon-button/toggle-icon-button.component";

@Component({
  selector: 'app-light-dark-selector',
  standalone: true,
  imports: [
    SliderComponent,
    ToggleIconButtonComponent
],
  templateUrl: './light-dark-selector.component.html',
  styleUrl: './light-dark-selector.component.css'
})
export class LightDarkSelectorComponent implements OnInit{

  displayMode = signal<string|null>(null);
  darkMode = localStorage.getItem("display-mode") == "dark";

  ngOnInit()
  {
    this.displayMode.set(localStorage.getItem('display-mode'))
    if(this.displayMode() == null)
    {
      this.displayMode.set("dark");
      localStorage.setItem("display-mode", this.displayMode()!);
    }
    document.body.setAttribute('data-theme', this.displayMode()!);
  }

  toggleMode(darkMode: boolean)
  {
    this.darkMode = darkMode;
    if(this.darkMode){
      this.displayMode.set("dark");
      localStorage.setItem("display-mode", this.displayMode()!);
      
    } else {
      this.displayMode.set("light");
      localStorage.setItem("display-mode", this.displayMode()!);
    }
    document.body.setAttribute('data-theme', this.displayMode()!);
  }


}
