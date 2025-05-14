from mongoengine import (
	Document,
	StringField,
	FloatField,
)

class Ubication(Document):
	latitude = FloatField()
	longitude = FloatField()
	city = StringField()