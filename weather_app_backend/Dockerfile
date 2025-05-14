# Example Backend Dockerfile
FROM python:alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

# Copy application code
COPY . .

# Start the Django server
CMD ["sh", "-c", "python manage.py makemigrations --empty corsheaders && python manage.py migrate --noinput && python manage.py runserver 0.0.0.0:8000"]