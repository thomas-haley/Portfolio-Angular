import { Component } from '@angular/core';
import { ContactMeFormComponent } from "../../../forms/contact-me-form/contact-me-form.component";
import { GlassCardComponent } from "../../content/glass-card/glass-card.component";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ContactMeFormComponent, GlassCardComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

}
