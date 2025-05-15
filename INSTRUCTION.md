## Instruction

Clone this repository to your local machine

Copy this command: git clone https://github.com/CrisNeron2001/weather-app.git

Ensure you have Docker installed on your system. You can find the installation instructions for your operating system. Follow this link: https://docs.docker.com/get-started/get-docker/

### Steps to Run the Project

1. Navigate to the `local` folder:
   - For Linux: `cd scripts/linux/local`
   - For Windows: `cd scripts/windows/local`

2. Navigate to the `git` folder:
   - For Linux: `cd ../git`
   - For Windows: `cd ../git`

3. Create your own `.env` file for the frontend:
   - Navigate to the `weather_app_frontend` folder.
   - Create a `.env` file and configure the necessary environment variables for the frontend.
   - Add `VITE_BACKEND_URL=http://localhost:8000/` in your file in the frontend.

4. Obtain an API key for MapLibre:
   - Visit the [MapLibre website](https://maplibre.org/).
   - Follow the instructions to create an account and generate an API key.
   - Add the API key to your `.env` file in the frontend.

5. Navigate to the `docker` folder:
   - For Linux: `cd ../docker`
   - For Windows: `cd ../docker`

6. Run the following scripts depending on your operating system:
   - **Linux**:
     - Build: `./build.sh`
     - Data Population: `./data_population.sh`
   - **Windows**:
     - Build: `./build.ps1`
     - Data Population: `./data_population.ps1`