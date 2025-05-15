# This script will automatically execute the specified Docker command when opened.

# Define the Docker command
$dockerCommand = 'docker exec -e PYTHONPATH=/app -w /scripts weather-app-backend-1 python data_population.py'

# Execute the Docker command
Invoke-Expression $dockerCommand