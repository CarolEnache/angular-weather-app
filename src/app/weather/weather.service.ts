import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { addCityToTableAction, CityList } from './store/actions/weather';
import { Store } from '@ngrx/store';

@Injectable()
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/forecast';
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '010721642521f31b0fbc8c3831d45951'
  };

  constructor(
    private http: HttpClient,
    private store: Store<CityList>
    ) { }

  searchWeatherForCity(city) {
    this
      .http
      .get(`${ this.url }?q=${city}&appid=${this.params.APPID}&units=${this.params.units}`)
      .subscribe(result => {
        this.store.dispatch(
          addCityToTableAction(result)
        )
      })
  }
}
