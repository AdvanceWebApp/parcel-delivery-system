import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LonginComponent } from './components/longin/longin.component';
import { ManageEmployeesComponent } from './components/admin/manage-employees/manage-employees.component';
import { ManageSystemAccessComponent } from './components/admin/manage-system-access/manage-system-access.component';


import { RegistParcelComponent } from './components/regist-parcel/regist-parcel.component';
import { TrackPackageComponent } from './components/track-package/track-package.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AssignmentComponent } from './components/assignment/assignment.component';


import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: 'registparcel', component : RegistParcelComponent ,canActivate: [AuthGuardService]},
  {path: 'trackpackage', component: TrackPackageComponent ,canActivate: [AuthGuardService]},
  {path: 'payment', component: PaymentComponent ,canActivate: [AuthGuardService]},
  {path: 'assignment', component: AssignmentComponent ,canActivate: [AuthGuardService]},
  {path: '',
   redirectTo: '/login',
   pathMatch:'full'
  },
  { path: 'login', component:  LonginComponent },
  { path: 'ManageEmployees', component:  ManageEmployeesComponent ,canActivate: [AuthGuardService]},
  { path: 'ManageSystemAccess', component:  ManageSystemAccessComponent ,canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false})],
  exports: [RouterModule],
  providers:[AuthService,AuthGuardService]
})
export class AppRoutingModule { }

