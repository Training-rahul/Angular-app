import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../practice-folder/Browser-router/home/home.component';
import { AboutComponent } from '../practice-folder/Browser-router/about/about.component';
import { ContactComponent } from '../practice-folder/Browser-router/contact/contact.component';
import { ErrorComponent } from '../practice-folder/Browser-router/error/error.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent,data: { animation: "Home" }},
  {path:'about', component:AboutComponent,data: { animation: "About" }},
  {path:'contact', component:ContactComponent,data: { animation: "Contact" }},
  {path:'**', component:ErrorComponent,data: { animation: "**" }}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
