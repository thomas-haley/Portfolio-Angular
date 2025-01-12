import { Component } from '@angular/core';
import { ContactMeFormComponent } from "../../../forms/contact-me-form/contact-me-form.component";
import { GlassCardComponent } from "../../content/glass-card/glass-card.component";
import { SmDisplayComponent } from "../../content/sm-display/sm-display.component";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ContactMeFormComponent, GlassCardComponent, SmDisplayComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

}
