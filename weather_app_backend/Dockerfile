FROM python:alpine

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

COPY . .

CMD ["sh", "-c", "python manage.py makemigrations --empty corsheaders && python manage.py migrate --noinput && python manage.py runserver 0.0.0.0:8000"]