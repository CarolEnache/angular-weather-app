import { City } from "../../../model/weather";

// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
export interface CityList {
  cityList: City[];
}

export const addCityToTableAction = (payload: any) => {
  return {
    type: 'ADD_CITY_TO_TABLE',
    payload
  }
};