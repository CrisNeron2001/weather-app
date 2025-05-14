FROM node:slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --force --legacy-peer-deps && \
    npm cache clean --force 

COPY . .

ENV VITE_HOST=0.0.0.0
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]