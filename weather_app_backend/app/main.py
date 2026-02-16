from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routers.weather_router import router

app = FastAPI(title="Weather API")

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
]

app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"]
)

app.include_router(router)