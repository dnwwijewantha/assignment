import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryComponent} from './country/country.component';
import {AddCountryComponent} from './add-country/add-country.component';
import {UpdateCountryComponent} from './update-country/update-country.component';
import {ViewCountryComponent} from './view-country/view-country.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'country'
  },
  {
    path: 'country',
    component: CountryComponent
  },
  {
    path: 'add',
    component: AddCountryComponent
  },
  {
    path: 'update/:name',
    component: UpdateCountryComponent
  },
  {
    path: 'view/:name',
    component: ViewCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
