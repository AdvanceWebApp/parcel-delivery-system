import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{LoginComponent} from './components/login/login.component';
import { ManageEmployeesComponent } from './components/admin/manage-employees/manage-employees.component';
import { ManageSystemAccessComponent } from './components/admin/manage-system-access/manage-system-access.component';


import { RegistParcelComponent } from './components/regist-parcel/regist-parcel.component';
import { TrackPackageComponent } from './components/track-package/track-package.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AssignmentComponent } from './components/assignment/assignment.component';

const routes: Routes = [
  {path: 'registparcel', component : RegistParcelComponent},
  {path: 'trackpackage', component: TrackPackageComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'assignment', component: AssignmentComponent},
  {path: '',
   redirectTo: '/login',
   pathMatch:'full'
  },
  { path: 'login', component:  LoginComponent},
  { path: 'ManageEmployees', component:  ManageEmployeesComponent},
  { path: 'ManageSystemAccess', component:  ManageSystemAccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComponent = [ManageEmployeesComponent,ManageSystemAccessComponent,LoginComponent,]
