import { City } from '../../../model/weather';

export const cityReducer = (state: Array<City> = [], action: any) => {
  switch(action.type) {
    case 'ADD_CITY_TO_TABLE':
      return [...state, action.payload]
    default:
      return state
  }
}
