import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

const routes: Routes = [
  {path: 'home', component: FirstpageComponent},
  {path: 'details', component: SecondpageComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//1stpage ~ /home
//2ndpage ~ /details

//1stservice ~ 