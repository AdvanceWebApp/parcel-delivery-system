import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegistParcelComponent } from './components/regist-parcel/regist-parcel.component';
import { TrackPackageComponent } from './components/track-package/track-package.component';

const routes: Routes = [
  {path: 'registparcel', component : RegistParcelComponent},
  {path: 'trackpackage', component: TrackPackageComponent},
  {path: '',
   redirectTo: '/registparcel',
   pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
