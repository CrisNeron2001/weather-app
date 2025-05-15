#!/bin/bash

# Navigate to the backend directory
cd ../weather_app_backend || exit

# Set up a virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install --no-cache-dir -r requirements.txt

# Run Django migrations
python manage.py makemigrations
python manage.py migrate

# Notify the user
echo "Setup complete. You can now run the server with: python manage.py runserver"