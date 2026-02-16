import httpx
from app.core.settings import setting, log

headers = {"accept": "application/json"}

async def weather_service():
	async with httpx.AsyncClient() as client:
		response = await client.get(url=setting.API_URL, headers=headers)
		if not response.json() and response.status_code != 200:
			log.error(f"Hubo un error al obtener api: {response.json()}")
		return response.json()