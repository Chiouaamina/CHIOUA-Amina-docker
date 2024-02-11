# Stage de construction
FROM node:20.11.0 AS build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .


# Construire l'application React
RUN npm run build


CMD ["npm", "start"]
