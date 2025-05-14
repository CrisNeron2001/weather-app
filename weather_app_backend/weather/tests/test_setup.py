from rest_framework.test import APITestCase
from weather.models import Ubication

class TestWeather(APITestCase):
    def setUp(self):
        Ubication(
            city="Test City",
            longitude=0.0,
            latitude=0.0
        ).save()
    def tearDown(self):
        Ubication.objects.all().delete()

