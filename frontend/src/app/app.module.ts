import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistParcelComponent } from './components/regist-parcel/regist-parcel.component';
import { TrackPackageComponent } from './components/track-package/track-package.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AssignmentComponent } from './components/assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistParcelComponent,
    TrackPackageComponent,
    PaymentComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
