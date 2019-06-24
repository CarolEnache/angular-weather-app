import { Component } from '@angular/core';
import { WeatherService } from '../../weather.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})

export class SearchComponent {
  // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED

  constructor(private weatherService: WeatherService) {}

  passTerm(term) {
    this.weatherService.searchWeatherForCity(term.value)
  }

  search() {
    // TO BE IMPLEMENTED
  }
}
