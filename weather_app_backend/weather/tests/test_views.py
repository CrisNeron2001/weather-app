from .test_setup import TestWeather
from rest_framework import status
from weather.models import Ubication

class TestViews(TestWeather):
    def test_get_ubication_data(self):
        response = self.client.get("/api/ubication/")
        ubication_data = Ubication.objects.all()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), len(ubication_data))