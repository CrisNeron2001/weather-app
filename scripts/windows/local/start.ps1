# Navigate to the backend directory
Set-Location -Path ../weather_app_backend

# Set up a virtual environment
python -m venv venv
.\venv\Scripts\Activate.ps1

# Install dependencies
pip install --no-cache-dir -r requirements.txt

# Run Django migrations
python manage.py makemigrations
python manage.py migrate

# Notify the user
Write-Host "Setup complete. You can now run the server with: python manage.py runserver" -ForegroundColor Green