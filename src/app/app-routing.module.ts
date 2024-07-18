import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { BuslistComponent } from './views/buslist/buslist.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { PassengersComponent } from './views/passengers/passengers.component';
import { PaymentsComponent } from './views/payments/payments.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './views/register/register.component';
import { TicketComponent } from './views/ticket/ticket.component';
import { ReturnComponent } from './views/return/return.component';
import { TripReviewComponent } from './views/trip-review/trip-review.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'privacy',
    component:PrivacyComponent
  },
  {
    path:'payment/:reference/:mobile/:token',
    component:PaymentsComponent
  },
  {
    path:'passengers',
    component:PassengersComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'print-ticket',
    component:TicketComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'trip-review',
    component:TripReviewComponent
  },
  {
    path:'onward-trip/:id1/:id2/:id3/:id4/:id5',
    component:ContactComponent
  },
  {
    path:'buslist/:id1/:id2/:id3/:id4/:id5/:id6',
    component:BuslistComponent
  },
  {
    path:'return/:id1/:id2/:id3/:id4/:id5/:id6',
    component:ReturnComponent
  },
  {
    path:'**',
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
