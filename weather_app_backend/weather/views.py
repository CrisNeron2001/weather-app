import requests
from decouple import config
from .models import Ubication
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def get_weather_data(request):
    weather_api_url = config("WEATHER_API_URL")
    headers = {"accept": "application/json"}
    ubications = Ubication.objects.all()
    data = []

    try:
        weather_response = requests.get(weather_api_url, headers=headers)
        weather_response.raise_for_status()
        weather_data = weather_response.json().get("data", [])

        weather_by_city = {item["city"]: item for item in weather_data}

        for ubication in ubications:
            city_name = ubication.city
            weather_info = weather_by_city.get(city_name)
            ubication_data = {
                "latitude": ubication.latitude,
                "longitude": ubication.longitude,
                "city": city_name
            }

            if weather_info:
                data.append({
                    **ubication_data,
                    "updated_at": weather_info.get("updated_at"),
                    "temperature": weather_info.get("temperature"),
                    "condition": weather_info.get("condition"),
                    "humidity": weather_info.get("humidity"),
                })
            else:
                data.append({
                    **ubication_data,
                    "weather_info": "No disponible"
                })

        return Response({
            "status": "success",
            "data": data
        }, status=status.HTTP_200_OK)

    except requests.exceptions.RequestException as e:
        return Response({
            "status": "error",
            "message": f"Error al conectar con la API del clima: {e}"
            }, status=status.HTTP_503_SERVICE_UNAVAILABLE)

    except ValueError:
        return Response({
            "status": "error",
            "message": "Error al decodificar la respuesta JSON de la API del clima."
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    except Exception as e:
        return Response({
            "status": "error",
            "message": f"Ocurrió un error inesperado: {e}"
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)