import { Component, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {
  renderCityList$ : Observable<any>;
  constructor(public cityList: Store<any>) {
    this.renderCityList$ = this.cityList.select(state => state.cityList)
  }

  getTemperatureAtHour(hourToSelect, data) {
    const result = data
      .map(item => ({ ...item, hour: item.dt_txt.split(' ')[1].split(':')[0]}))
      .filter(({ hour }) => hour === hourToSelect)
      .map(item => item.main.temp)
      .reduce(a => a)
    return result
  }

  ngOnChanges() {

  }
}


