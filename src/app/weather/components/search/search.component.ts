import { Component } from '@angular/core';
import { WeatherService } from '../../weather.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [ WeatherService ]
})

export class SearchComponent {
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED

  constructor(private weatherService: WeatherService) {}

  search(term) {
    this.weatherService.searchWeatherForCity(term.value)
  }
}
