from app.services.weather_services import weather_service
from fastapi import APIRouter

router = APIRouter()

@router.get(path="/weather", tags=["Weather"])
async def weather_router():
	return await weather_service()

@router.get(path="/health")
def health_router():
	return { "status": "ok" }