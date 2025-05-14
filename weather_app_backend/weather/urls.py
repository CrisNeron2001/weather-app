from django.urls import path
from .views import (
	get_weather_data
)

urlpatterns = [
	path("weather_data/", get_weather_data),
]