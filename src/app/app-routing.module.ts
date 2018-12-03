import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { EventsComponent } from './accomodation/events/events.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { WeddingsComponent } from './accomodation/weddings/weddings.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'events', component: EventsComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class AppRoutingModule { }
