import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

import django
import pandas as pd

django.setup()

from weather.models import Ubication

data = pd.read_excel("tabla_ubicacion.xlsx")

ubication_data = data[[
    "CIUDAD",
	"LONGITUD",
	"LATITUD"
]].drop_duplicates()
for index, row in ubication_data.iterrows():
    Ubication(
        longitude=row["LONGITUD"],
        latitude=row["LATITUD"],
        city=row["CIUDAD"]
    ).save()