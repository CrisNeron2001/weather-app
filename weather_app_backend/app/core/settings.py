from pydantic_settings import BaseSettings
from pathlib import Path
import logging

BASE_DIR = Path(__file__).resolve().parent.parent.parent

log = logging.getLogger(__name__)

class Setting(BaseSettings):
	PROJECT_NAME: str = "weather_app_backend"

	API_URL: str

	logging.basicConfig(filename='myapp.log', level=logging.INFO)

	class Config():
		env_file = BASE_DIR / ".env"

setting = Setting()