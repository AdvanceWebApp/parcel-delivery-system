import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

import { RegistParcelComponent } from './components/regist-parcel/regist-parcel.component';
import { TrackPackageComponent } from './components/track-package/track-package.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AssignmentComponent } from './components/assignment/assignment.component';

import { ManageEmployeesComponent } from './components/admin/manage-employees/manage-employees.component';
import { ManageSystemAccessComponent } from './components/admin/manage-system-access/manage-system-access.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistParcelComponent,
    TrackPackageComponent,
    PaymentComponent,
    AssignmentComponent,
    ManageEmployeesComponent,
    ManageSystemAccessComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
