import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './views/footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { TicketComponent } from './views/ticket/ticket.component';
import {MatButtonModule} from '@angular/material/button';
import { ContactComponent } from './views/contact/contact.component';
import { BuslistComponent } from './views/buslist/buslist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BackendInterceptor } from './backend.interceptor';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReturnTripComponent } from './views/return-trip/return-trip.component';
import {MatStepperModule} from '@angular/material/stepper';
import { StepsetModule } from 'stepper-library';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProfileComponent } from './views/profile/profile.component';
import { PaymentsComponent } from './views/payments/payments.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReturnComponent } from './views/return/return.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { PassengersComponent } from './views/passengers/passengers.component';
import { OnwardTripComponent } from './views/onward-trip/onward-trip.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
import { RegisterComponent } from './views/register/register.component';
import { DatePipe } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { TripReviewComponent } from './views/trip-review/trip-review.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    TicketComponent,
    ContactComponent,
    BuslistComponent,
    ReturnTripComponent,
    ProfileComponent,
    PaymentsComponent,
    ReturnComponent,
    PassengersComponent,
    OnwardTripComponent,
    PrivacyComponent,
    RegisterComponent,
    TripReviewComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatBadgeModule,
    MatTabsModule,
    ModalModule.forRoot(),
    MatStepperModule,
    StepsetModule,
    TabsModule.forRoot(),
    MatPaginatorModule,
    NgxSpinnerModule,
    MatExpansionModule,
    ClipboardModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:BackendInterceptor, multi: true },
    DatePipe

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
