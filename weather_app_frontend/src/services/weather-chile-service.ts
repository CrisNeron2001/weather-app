import { Weather } from "@models/class/weather-chile-class";
import { WeatherApiResponse } from "@models/respose-api/weather-chile-api";

export async function getWeather(): Promise<Weather[]> {
	const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}`, {
			method: 'GET',
			headers: {
				"accept": 'application/json',
			}
		}); 

	const text = await response.text();

	let json: WeatherApiResponse;

	try {
		json = JSON.parse(text);
	} catch (error) {
		throw console.log("Error al transformar el texto a json: ", error);
	}

	if (!response.ok) {
		throw new Error(json?.status ?? "Error en la peticion")
	}

	if (!json?.data || !Array.isArray(json.data)) {
		throw new Error("Formato de respuesta inválido");
	}
	return json.data;
}