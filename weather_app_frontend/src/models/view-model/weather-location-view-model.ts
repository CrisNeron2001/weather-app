import { Location } from "@interfaces/locations-regions-interface"
import { Weather } from "@models/class/weather-chile-class"

export type WeatherWithLocation = {
  weather: Weather[],
  location: Location
}
