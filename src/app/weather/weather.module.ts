import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WeatherContainer } from './weather.container';
import { WeatherService } from './weather.service';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// IF YOU DECIDE TO USE NG-RX YOU'LL NEED TO UNCOMMENT SOME LINES
import { StoreModule } from '@ngrx/store';
import { cityReducer, } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({cityList: cityReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer
  ],
  providers: [
    WeatherService,
    HttpClient
  ]
})
export class WeatherModule { }
