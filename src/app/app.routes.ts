import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComingSoonComponent } from './fallback/coming-soon/coming-soon.component';
import { ContactMeComponent } from './home/views/contact-me/contact-me.component';
import { AdminComponent } from './home/admin/admin.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'projects', component: ComingSoonComponent},
    {path: 'contact', component: ContactMeComponent},
    {path: 'admin', component: AdminComponent},
];
