#!/bin/bash
# This script will automatically execute the specified Docker command when opened.

# Define the Docker command
docker_command="docker exec -e PYTHONPATH=/app -w /scripts weather-app-backend-1 python data_population.py"

# Execute the Docker command
eval "$docker_command"