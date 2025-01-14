import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccesosRoutingModule } from './accesos-routing.module';

import { SharedModule } from '../shared/shared.module';

import { CreacionMDAComponent } from './pages/creacion-mda/creacion-mda.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';



@NgModule({
  declarations: [
    CreacionMDAComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
  ],
  imports: [
    CommonModule,
    AccesosRoutingModule,
    SharedModule
  ]
})
export class AccesosModule { }
