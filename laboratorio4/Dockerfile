# Usa una imagen oficial de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json e instala dependencias
COPY package*.json ./ 

# Instala las dependencias
RUN npm install

# Copia todo el código fuente al contenedor en el directorio /app
COPY . /app

# Expone el puerto 5000
EXPOSE 5000

# Ejecuta la aplicación desde src/app.js
CMD ["node", "src/app.js"]
